const knex = require("./../connection/connnecton");

exports.post = (req, res) => {
  let pdata = req.body;
  knex("ormdata")
    .insert(pdata)
    .then(() => {
      res.send("data inserted...");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.get = (req, res) => {
  let data = req.params.id;
  knex("ormdata")
    .where({ ID: data })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.put = (req, res) => {
  let pdata = req.params.id;
  let afd = req.body;
  knex("ormdata")
    .where({ ID: pdata })
    .update(afd)
    .then((data) => {
      res.send("data is updated...");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delete = (req, res) => {
  knex("ormdata")
    .where({ ID: req.params.id })
    .del()
    .then((data) => {
      res.send("data is deleted...");
    })
    .catch((err) => {
      console.log(err);
    });
};
