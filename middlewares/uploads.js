const multer = require("multer");
const { v4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, `${v4()}_${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const mimetype = file.mimetype;
    const imageMimeTypes = /^image\/(png|jpg|jpeg)$/;

    try {
      if (!imageMimeTypes.test(mimetype)) {
        return cb(new Error("Only image files are allowed"));
      }
      cb(null, true);
    } catch (err) {
      console.log(err.message);
      cb(err);
    }
  },
});

module.exports = { upload };
