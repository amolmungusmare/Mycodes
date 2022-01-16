const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  res.send("Amol is here..");
});
app.listen(9000, () => {
  console.log("listening...");
});
