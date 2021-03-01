const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const labelModel = new Schema({
  name: {
    type: String, required: true, unique: true
  },
  city: String,
  country: String,
  street: String,
  streetNumber: Number,
  zipcode: String,
  logo: {
      type: String,
      default: "https://cdn6.aptoide.com/imgs/1/4/c/14c166cc3cd2cac8da4809024ba82d0e_icon.png"
  }
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const LabelModel = mongoose.model("labels", labelModel);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents

module.exports = LabelModel;