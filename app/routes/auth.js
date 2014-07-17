var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res) {
  // render 404
});

router.post('/signup', function(req, res) {
  var db = req.db;
  var collection = db.get('collection');
  var uid = req.body.username;
  var pw = req.body.password;

  collection.insert({
    'uid': uid,
    'pw': pw
  },
  function(err, doc) {
    if (err) {
      // Render error
      res.send('There was problem in signing up');
    }
    else {
      res.location('/');
      res.redirect('/');
    }
  });

});

module.exports = router;
