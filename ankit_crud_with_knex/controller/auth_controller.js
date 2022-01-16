const knex = require("../connections/db");

InsertData = (req, res) => {
  knex("user")
    .insert(req, body)
    .then((result) => {
      res.send("data insert");
    })
    .catch((err) => {
      res.send({ error: err });
    });
};

getAllData=(req,res)=>{
  knex('user').then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
}

updateById=(req,res)=>{
  knex('user').where({id:req.params.id}).update(req,body).then(data=>{
    res.send('data update')
  }).catch(err=>{
    res.send(err)
  })
}

deleteById=(req,res)=>{
  knex('user').where({id:req.params.id}).del().then(data=>{
    res.send('data delete')
  }).catch(err=>{
    res.send(err)
  })
}


getById=(req,res)=>{
  knex('user').where({id:req.params.id}).then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
}

module.exports = { InsertData,getAllData,updateById,deleteById,getById };
