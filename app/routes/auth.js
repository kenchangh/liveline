var express = require('express');
var router = express.Router();

// No GET access
router.get('/signup', function(req, res) {
  // render 404
  return null;
});

// Only executed upon ajax request
router.post('/signup', function(req, res) {
  var uid = req.body.uid;
  var pw = req.body.pw;
  console.log(uid + ' ' + pw)
});

module.exports = router;

