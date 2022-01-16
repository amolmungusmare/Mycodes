const knex = require("./../connection/connection");

const fs = require("fs");
const api = JSON.parse(
  fs.readFileSync("/home/navgurukul/Desktop/amol/apiknex/apiknex.json", "utf-8")
);

for (let i of api) {
  let adf = {
    id: i["id"],
    name: i["name"],
    logo: i["logo"],
    days_to_complete: i["days_to_complete"],
    short_description: i["short_description"],
  };
  knex("merakidata")
    .insert(adf)
    .then((data) => {
      console.log("data inserted with ID ", i["id"]);
    })
    .catch((err) => {
      console.log(err);
    });
}
// };
