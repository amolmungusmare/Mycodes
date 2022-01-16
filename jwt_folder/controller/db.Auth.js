const knex = require("../connnection/db");
const bcrypt = require("bcrypt");
const { GenerateToken } = require("../auth/index");
exports.insertData = (req, res) => {
  const data = {
    User_name: req.body.User_name,
    Name: req.body.Name,
    Password: bcrypt.hashSync(req.body.Password, 10),
  };
  knex("JWT_folder")
    .insert(data)
    .then((result) => {
      res.send({ massage: "data insert" });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.loginData = (req, res) => {
  knex("JWT_folder")
    .where({ User_name: req.body.User_name })
    .then((data) => {
      const Password = bcrypt.compareSync(req.body.Password, data[0].Password);
      if (Password) {
        const token = GenerateToken(req.body);
        res.cookie("token", token).send(data);
      }
      else_;
      res.send("User_name or Password invalid");
    })
    .catch((err) => {
      res.send({ Error: massage.err });
    });
};
exports.getById = (req, res) => {
  knex("JWT_folder")
    .where({ ID: req.params.id })
    .then((data) => {
      res.send(req.token);
    })
    .catch((err) => {
      res.send({ Error: massage.err });
    });
};
