const express = require("express");
const app = express();
app.set("view engine", "hbs");
app.use(express.static(Path_asdf));
app.get("/", (req, res) => {
  res.render("index", {
    object,
  });
});

app.get("/", (req, res) => {
  res.send("Hello for the express server");
});
app.listen(5000, () => {
  console.log("Listening...");
});
