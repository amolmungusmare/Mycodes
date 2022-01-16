const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "#Amol441907",
    database: "apiknex",
  },
});
knex.schema
  .createTable("merakidata", (table) => {
    table.integer("id");
    table.string("name");
    table.string("logo");
    table.string("days_to_complete");
    table.string("short_description");
  })
  .then(() => {
    console.log("Table created...");
  })
  .catch((err) => {
    console.log("Table already exist...");
  });

module.exports = knex;
