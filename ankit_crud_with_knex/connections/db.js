require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
  },
});

knex.schema
  .createTable("user", (table) => {
    table.increments("id");
    table.string("Name");
    table.string("Mail");
    table.string("Password");
  })
  .then(() => {
    console.log("table created");
  })
  .catch((err) => {
    console.log("table is already exist");
  });

module.exports = knex;
