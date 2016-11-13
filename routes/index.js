var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var Booking = require('../models/booking')
var ObjectId = require('mongodb').ObjectId;
var mongoose = require('mongoose');


//get hompage
router.get('/', ensureAuthenticated, function(req,res){
//finds camps booked by user_id
  var id = req.user._id;
  var o_id = new mongo.ObjectID(id);
  Booking.find({'user_id':o_id}, function(err, bookings) {
    if (err) { throw err };
    res.render('index', {
      bookings: bookings
    });
  });
});

router.get('/todo',  function(req,res){
  res.render('todo');
})

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    // req.flash('error_msg', 'you are not logged in')
    res.redirect('/users/login');
  }
}

module.exports = router;
