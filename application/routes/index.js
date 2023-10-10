var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Noel Andolz Aguado " , active:{index:true}});
});

router.get("/login", function (req,res) {
  res.render('login', { title: 'Login', css: ["style.css"], active:{login:true}});
})

router.get("/registration", function (req,res) {
  res.render('registration', { title: 'Registration', css: ["style.css"], js: ["validation.js"], active:{registration:true}});
})

router.get("/empty", function (req,res) {
  res.render('empty');
})

router.get("/postvideo", function (req,res) {
  res.render('postvideo', { title: 'PostVideo', css: ["style.css"], active:{postvideo:true}});
})

router.get("/profile", function (req,res) {
  res.render('profile', { title: 'Profile', css: ["style.css"], active:{profile:true}});
})





module.exports = router;