require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
});
knex.schema
  .createTable("ormdata", (table) => {
    table.increments("ID"),
      table.string("uName"),
      table.string("password"),
      table.string("cName"),
      table.string("sName"),
      table.string("jobName");
  })
  .then(() => {
    console.log("Table is created...");
  })
  .catch((err) => {
    console.log("Table is already exist...");
  });
module.exports = knex;
