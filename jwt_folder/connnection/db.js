const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    database: "Details",
    password: "#Amol441907",
  },
});
knex.schema
  .connection("JWT_folder", (table) => {
    createTable(
      table.increments("ID"),
      table.string("User_name"),
      table.string("Name"),
      table.string("Password")
    );
  })
  .then(() => {
    console.log("create Table");
  })
  .catch(() => {
    console.log("tabel already exist");
  });

module.exports = knex;
