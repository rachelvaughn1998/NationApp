import express from "express";
import LogInModel from "../models/login.js";
const userEndpoints = express.Router();

userEndpoints.get("/getLogin", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  //req = get info from frontend, res = send info from backend

  LogInModel.find({})
    .then((err, result) => {
      console.log("getresult");
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    })
    .catch((err) => {
      res.status(400).send({ error: "Could not get login :(" });
    });
});

userEndpoints.post("/createLogin", (req, res) => {
  const login = req.body;
  if (login.username === undefined || login.password === undefined) {
    res.status(400).send({ error: "Username or password missing :(" });
  }
  const newLogin = new LogInModel(login);
  newLogin
    .save()
    .then((result) => console.log("result", result))
    .catch((err) => {
      res.status(400).send({ error: "Could not create login :(" });
    });

  res.json(login);
});

userEndpoints.get("/:id", (req, res) => {
  LogInModel.findById(req.params.id)
    .then((login) => res.json(login))
    .catch((err) => {
      res.status(400).send({ error: "Could not get login :(" });
    });
});

userEndpoints.post("/:id", (req, res) => {
  const login = req.body;
  console.log("login", login);
  var query = { id: req.params.id };
  console.log("req.newData", req.newData);
});

userEndpoints.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;

  if (!username && !password && !email) {
    res.status(400).send({ error: "login missing 🙁" });
  }

  let updateObj = {};
  if (username) {
    updateObj.username = username;
  }
  if (password) {
    updateObj.password = password;
  }

  if (email) {
    updateObj.email = email;
  }

  LogInModel.findByIdAndUpdate(id, updateObj, { new: true })
    .then((updatedLogin) => {
      if (!updatedLogin) {
        res.status(404).send({ error: "Login not found 🙁" });
      } else {
        res.json(updatedLogin);
      }
    })
    .catch((err) => {
      res.status(400).send({ error: "Could not update login 🙁" });
    });
});

export default userEndpoints;
