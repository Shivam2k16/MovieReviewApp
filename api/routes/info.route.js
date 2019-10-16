const express = require('express');
const app = express();
const infoRoutes = express.Router();

// Require Info model in our routes module
let Info = require('../models/Info');
// Defined store route
infoRoutes.route('/add').post(function (req, res) {
  let info = new Info(req.body);
  console.log('yes enterd');
  info.save()
    .then(info => {
      res.status(200).json({'info': 'info in added successfully'});
    })
    .catch(err => {

  console.log('yes enterd or =====>>>>>>');
    res.status(400).send("unable to save to database");
    });
});

console.log('yes enterd or =====>>>>>>');
// Defined get data(index or listing) route
infoRoutes.route('/').get(function (req, res) {
    Info.find(function (err, infor){
    if(err){
      console.log(err);
    }
    else {
      res.json(infor);
    }
  });
});



module.exports =infoRoutes;