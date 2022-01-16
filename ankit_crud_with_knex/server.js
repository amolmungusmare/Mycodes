const as = require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port;

const router = require("./routes/index");
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("server connected");
});

app.listen(port, () => {
  console.log(`server connecting port no : ${port}`);
});
