var mongoose = require("mongoose");
const DestinationSchema = mongoose.Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  description: String,
  accomodation: String,
  tips: String,
  image: String,
  category: {
    type: String,
    enum: ["unexplored", "cultural", "historical", "naturistic", "popular"],
  },
  currentStatus: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Destinations", DestinationSchema);
