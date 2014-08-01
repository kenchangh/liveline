var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
.get(function (req, res, next) {
  res.render('chat', { title: 'Liveline - A better way to connect' });
})
.post(function (req, res, next) {
  // render 404
  return null;
});

router.get('/login-page', function(req, res) {
  res.render('login', { title: 'Sign in to Liveline' });
});

module.exports = router;

