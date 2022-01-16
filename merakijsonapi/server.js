const express = require("express");
const app = express();
const fs = require("fs");
app.get("/", (req, res) => {
  res.send(
    fs.readFileSync(
      "/home/navgurukul/Desktop/amol/merakijsonapi/server.json",
      "utf-8"
    )
  );
});
app.listen(5679, () => {
  console.log("Running.....");
});

function amol(num) {
  const asdf = JSON.parse(
    fs.readFileSync(
      "/home/navgurukul/Desktop/amol/merakijsonapi/server.json",
      "utf-8"
    )
  );
  for (i of asdf) {
    for (j of i) {
      if (j[84] == num) {
        return j;
      }
    }
  }
}
