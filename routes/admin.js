var express = require('express')
var ConnectRoles = require('connect-roles');
var router = express.Router();
var Camp = require('../models/camps')



router.get('/', ensureAuthenticated, ensureAdmin, function(req, res){

  var offLine = [];
  var onLine = [];

  Camp.find({}, function(err, camps){
    for(var i in camps){
      if(camps[i].status === true){
        onLine.push(camps[i]);
      } else {
        offLine.push(camps[i]);
      }
    }
    res.render('admin/index', {
      onLine:onLine,
      offLine:offLine
    });
  });
})

router.get('/:id',  ensureAuthenticated, ensureAdmin, function(req, res){
    Camp.findOne({'_id':req.params.id}, function(err, camp){
      if(err) throw err;
      console.log(camp)
      res.render('admin/show', {
        camp:camp
      });
    });
});

function ensureAdmin(req, res, next){
  if(req.user.admin === true){
    return next()
  } else {
    req.flash('error_msg', "Access Denied Bitch")
    res.redirect('/')
  }
}

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('error_msg', 'Please log in, or sign up')
    res.redirect('/users/login');
  }
}


module.exports = router;
