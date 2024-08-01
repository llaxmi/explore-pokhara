const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null, 'uploads/')
    },
    filename : function(req, file, cb){
      let ext = path.extname(file.originalname)
      cb(null, Date.now()+ext)
    }
  })

  var upload = multer({
    storage : storage._handleFilefileFilter: function(req, file, callback){
        if(
            file.minetype == "image/png"
|| file.minetype =="image/jpg"        ){
    callback(null, true)
}else{
    console.log('only jpg &png file supported')
    callback(null, false)
}
    },
  limits : {
    fileSize: 1024 * 1024 *2
  }
})

module.exports = upload