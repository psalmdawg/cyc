var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var Profile = require('../models/profiles')
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;



router.get('/', ensureAuthenticated, function(req, res){
  res.render('profiles/index')
})

router.get('/new', ensureAuthenticated, function(req, res){
  res.render('profiles/create')
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
