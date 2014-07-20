var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('front', { title: 'Liveline - A better way to connect' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Sign in to Liveline' });
});

module.exports = router;
