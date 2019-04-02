var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'hello' });
});

router.get('/info', (req, res, next) => {
  res.json({ params: req.query });
});

module.exports = router;
