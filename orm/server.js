const express = require("express");
const app = express();
const port = 4576;
const routes = require("./routes/routes");
app.use(express.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Listening to the port.. ${port}`);
});
