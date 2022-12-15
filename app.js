const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/", function (req, res) {
//   res.send(req.body.port);
// });

app.get("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Name required");
  }

  res.status(200).send(`Thank You ${res.body.name}`);
});

app.post("/", function (req, res) {
  if (!req.header("password")) {
    return res.status(400).send("incorrect");
  }

  if (req.header("password") != "123456") {
    return res.status(400).send("No authorised");
  }

  res.send("Log in");
});

app.listen(3000, function (req, res) {
  console.log("Running ...");
});
