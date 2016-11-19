var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var Camp = require('../models/camps')
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;


router.get('/index', ensureAuthenticated, function(req,res){
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

router.get('/create', ensureAuthenticated, ensureAdmin, function(req,res){
    res.render('camps/create');
});

router.get('/saved', ensureAuthenticated, function(req,res){
  res.render('camps/saved');
});

// see this
//get this route to show individual camps
// https://webapplog.com/url-parameters-and-routing-in-express-js/

router.get('/:id', ensureAuthenticated, function(req, res){
  Camp.findOne({'_id':req.params.id}, function(err, camp){
    if(err) throw err;
    res.render('camps/show', {
      camp:camp
    });
  });
});

router.post('/create', ensureAuthenticated, function(req,res){
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
      res.redirect('/admin');
  };
});

router.post('/update', function(req, res){
  var id = req.body.camp_id
  var o_id = new mongo.ObjectID(id);

  var name = req.body.name;
  var description = req.body.description;
  var cost = req.body.cost;
  var length = req.body.length;
  var dates = req.body.dates;
  var status = req.body.statusVal;

  Camp.update(
    { "_id" : o_id },
    { "$set": {
      name: name,
      description: description,
      cost: cost,
      length: length,
      dates: dates,
      status: status
    }},

    function (err, result) {
      if (err){
        console.log("there is an error: " + err)
      } else {
        req.flash('success_msg', 'Camp updated!')
        res.redirect('/admin');
      }
    }
  )
});

function ensureAdmin(req, res, next){
  if(req.user.admin === true){
    return next()
  } else {
    req.flash('error_msg', "Access Denied Bitch")
    res.redirect('/')
  }
};

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
