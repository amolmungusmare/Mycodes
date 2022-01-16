const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
// app.get("/about", (req, res) => {
//   res.send("Amol is here");
// });
app.listen(1000, () => {
  console.log("listening...");
});
