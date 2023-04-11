import mongoose from "mongoose";
//const mongoose = require("mongoose");

const url =
  "mongodb+srv://oliviahogstedt:89WWYRRv0iQKFj4G@cluster0.kfs5n4j.mongodb.net/Kandidat?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("connected");
}); //connect to database

const NationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  maxCapacity: {
    type: Number,
    required: false,
  },

  guestCount: {
    type: Number,
    required: false,
  },
});

NationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const NationModel = mongoose.model("nations", NationSchema);
//module.exports = NationModel;
export default NationModel;