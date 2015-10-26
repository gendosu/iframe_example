var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.url);
  res.render('index_iframe', { title: "Express", url: req.body.url});
});

module.exports = router;
