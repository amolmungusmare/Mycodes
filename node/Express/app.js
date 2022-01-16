var express = require("express");
var app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello.... My name is Amol");
});

app.listen(1000, () => {
  console.log("listening");
});
