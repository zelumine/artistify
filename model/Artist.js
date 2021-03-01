const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const artistModel = new Schema({
  name: {
    type: String, required: true, unique: true
  },
  isBand: Boolean,
  description: String,
  picture: {
      type: String,
      default: "https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png"
  }
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const ArtistModel = mongoose.model("artists", artistModel);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents

module.exports = ArtistModel;