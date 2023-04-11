app.get("/getLogin", (req, res) => {
  LogInModel.find({}).then((err, result) => {
    console.log(result);
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createLogin", async (req, res) => {
  const login = req.body;
  const newLogin = new LogInModel(login);
  await newLogin.save();

  res.json(login);
});
