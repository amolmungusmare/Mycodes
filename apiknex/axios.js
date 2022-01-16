const axios = require("axios");
const fs = require("fs");
axios.get("http://api.navgurukul.org/courses").then((res) => {
  fs.writeFileSync("apiknex.json", JSON.stringify(res.data));
});
