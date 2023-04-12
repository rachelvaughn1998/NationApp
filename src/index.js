//const fs = require("fs");
//const path = require("path");
import express from "express";
//const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const LogInModel = require("./models/login");
import cors from "cors";
//const cors = require("cors"); //connects api to frontend

//const nationEndpoints = require("./endpoints/nationEndpoints");
import nationEndpoints from "./endpoints/nationEndpoints.js";
import userEndpoints from "./endpoints/userEndpoints.js";

app.use(cors());
app.use(express.json()); //convert where there is a 'body'
const url =
  "mongodb+srv://oliviahogstedt:89WWYRRv0iQKFj4G@cluster0.kfs5n4j.mongodb.net/Kandidat?retryWrites=true&w=majority";

app.use("/nations", nationEndpoints);
app.use("/login", userEndpoints);

app.listen(3001, () => {
  console.log("server runs");
});


