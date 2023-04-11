import express from "express";
//const express = require("express");
import NationModel from "../models/nations.js";
//const NationModel = require("../models/nations.js");
const nationEndpoints = express.Router();

nationEndpoints.get("/", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  //req = get info from frontend, res = send info from backend
  NationModel.find({})
    .then((err, result) => {
      console.log("getresult");
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    })
    .catch((err) => {
      res.status(400).send({ error: "Could not get nations :(" });
    });
});

nationEndpoints.post("/", (req, res) => {
  const nation = req.body;
  if (nation.name === undefined || nation.description === undefined) {
    res.status(400).send({ error: "Name or description missing :(" });
  }
  const newNation = new NationModel(nation);
  newNation
    .save()
    .then((result) => console.log("result", result))
    .catch((err) => {
      res.status(400).send({ error: "Could not create nations :(" });
    });

  res.json(nation);
});

nationEndpoints.get("/:id", (req, res) => {
  NationModel.findById(req.params.id)
    .then((nation) => res.json(nation))
    .catch((err) => {
      res.status(400).send({ error: "Could not get nation :(" });
    });
});

nationEndpoints.post("/:id", (req, res) => {
  const nation = req.body;
  console.log("nation", nation);
  var query = { id: req.params.id };
  console.log("req.newData", req.newData);
  req.newData.guestCount = nation.guestCount;

  MyModel.findOneAndUpdate(
    query,
    req.newData,
    { upsert: false },
    (err, doc) => {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    }
  );
});

export default nationEndpoints;
