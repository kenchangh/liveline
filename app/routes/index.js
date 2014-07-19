var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('front', { title: 'Liveline - A better way to connect' });
});

module.exports = router;
