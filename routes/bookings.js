var express = require('express');
var router = express.Router();
var Booking = require('../models/booking')



router.get("/info", ensureAuthenticated, function(req, res){
  res.render('bookings/info');
})

router.post("/book", function(req, res){
  // var camp_id = req.body.camp_id;
  var name = req.body.name
  var booking_email = req.body.user_email;
  var pgName = req.body.pg_name;
  var address = req.body.address;
  var contact_number = req.body.contact_number;
  var special_info = req.body.special_information;
  var user_id = req.body.user_id;
  var username = req.body.username;
  var user_email = req.body.email;
  var name_of_user = req.body.name_of_user;
  var camp_id = req.body.camp_id;


  var errors = req.validationErrors();
  if(errors){
    res.render('/bookings/info', {
      errors:errors
    });
  } else {
    var newBooking = new Booking({
      name:name,
      booking_email:booking_email,
      pgName:pgName,
      address:address,
      contact_number:contact_number,
      special_info:special_info,
      user_id :user_id,
      username:username,
      user_email :user_email,
      name_of_user:name_of_user,
      camp_id:camp_id
    })

  newBooking.save(function(err, newBooking){
    if(err) throw err;
    console.log(newBooking)
  });
  req.flash('success_msg', 'Booking Saved!')
  res.redirect('/');
  }


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
