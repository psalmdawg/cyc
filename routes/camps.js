var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
// var Booking = require('../models/booking')
// var ObjectId = require('mongodb').ObjectId;
var mongoose = require('mongoose');


router.get('/camps', ensureAuthenticated, function(req,res){
  res.render('camps/camps');
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
