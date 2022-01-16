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
  .connection("Crud", (table) => {
    createTable(\\\\
      table.string("ID"),
      table.string("U_name"),
      table.string("Name"),
      table.string("Surname"),
      table.string("Password")
    );
  })
  .then((msg) => {
    res.send("Table is created...");
    console.log("Table is created...");
  })
  .catch((err) => {
    res.send("Table already exist");
    console.log("Table already exist");
  });
module.exports = knex;
