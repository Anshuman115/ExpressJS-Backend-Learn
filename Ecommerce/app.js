const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const bcrypt = require("bcrypt");
app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "contact.html"));
// });

app.listen(port);
