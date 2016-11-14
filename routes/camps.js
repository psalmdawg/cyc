var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var Camp = require('../models/camps')
var mongoose = require('mongoose');


router.get('/index',  function(req,res){
  Camp.find({}, function(err, camps){
  //filters camplist status for true or false. if true camp is live
    var camplist = [];
    for (var i in camps){
      if(camps[i].status === true){
        camplist.push(camps[i]);
      };
    };
    res.render('camps/index', {
      camplist:camplist
    });
  });
});

router.get('/create',  function(req,res){
  res.render('camps/create');
});

// see this
//get this route to show individual camps
// https://webapplog.com/url-parameters-and-routing-in-express-js/

router.get('/:id',  function(req, res){
  Camp.findOne({'_id':req.params.id}, function(err, camp){
    if(err) throw err;
    res.render('camps/show', {
      camp:camp
    });
  });
});

router.post('/create', function(req,res){
  var name = req.body.name;
  var description = req.body.description;
  var cost = req.body.cost;
  var length = req.body.length;
  var dates = req.body.dates;
  var errors = req.validationErrors();

  if(errors){
    res.render('/camps/create', {
      errors:errors
    });
  } else {
    var newCamp = new Camp({
      name:name,
      description:description,
      cost:cost,
      length:length,
      dates:dates
    });

    newCamp.save(function(err, newCamp){
      if(err) throw err;
      console.log(newCamp)
    });
      req.flash('success_msg', 'Camp created!')
      res.redirect('/camps/index');
  };
});


router.post('/update', function(req, res){
  var id = req.body.camp_id
  console.log(id)
  console.log("which is a  : " + typeof(id))
  var name = req.body.name;
  var description = req.body.description;
  var cost = req.body.cost;
  var duration = req.body.duration;
  var dates = req.body.dates;

  Camp.update(
   { '_id' : ObjectId(id) },
   { $set: { 'name': newContent } },
   function (err, result) {
      if (err) throw err;
      console.log(result);
   })
})

//authentication fn. try to fully understand the magic here..
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    // req.flash('error_msg', 'you are not logged in')
    res.redirect('/users/login');
  }
}


module.exports = router;
