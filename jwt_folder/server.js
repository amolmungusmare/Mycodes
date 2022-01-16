const express = require("express");
const app = express();
const route = require("./routes/index");
app.use(express.json());
app.use("/", route);

app.listen(4444, () => {
  console.log("Listening to the port");
});
