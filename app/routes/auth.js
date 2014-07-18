var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res) {
  // render 404
  return null;
});

router.post('/signup', function(req, res) {
  var uid = req.body.uid;
  var pw = req.body.password;
  console.log(uid + ' ' + pw)
});

module.exports = router;

