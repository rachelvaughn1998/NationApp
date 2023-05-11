import mongoose from "mongoose";
//const mongoose = require("mongoose");

const mongoose = require('mongoose');

const url =
  "mongodb+srv://oliviahogstedt:89WWYRRv0iQKFj4G@cluster0.kfs5n4j.mongodb.net/Kandidat?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("connected");
}); //connect to database

const NationSchema = new mongoose.Schema({

  username: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    trim: true,
    required: false,
  },

  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: false,
  },

  longitude: {
    type: Number,
    required: false,
  },

  latitude: {
    type: Number,
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
    required: true,
  },

  openingHours: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
    match: /^https?:\/\/.*$/i,
  },
  header: {
    type: String,
    required: false,
    match: /^https?:\/\/.*$/i,
  },
  menu: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
      match: /^https?:\/\/.*$/i,
    },
  }
});

NationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const NationModel = mongoose.model("nations", NationSchema);
export default NationModel;