const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'hello' });
});

router.get('/info', (req, res, next) => {
  const params = {
    client_id: '87b570799d4fb508c3b0',
    client_secret: 'f7b3adbd500207d4067c9ea682438da6b9aafb94',
    code: req.query.code,
  };

  fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(r => {
    res.status(r.status);
    return r.json();
  }).then(d => {
    res.json(d);
  }).catch(e => {
    console.log(e);
    next(e)
  });
});

module.exports = router;
