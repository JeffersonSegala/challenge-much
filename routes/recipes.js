const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const ingridients = req.query.i;

  return res.send('Received ingridients: ' + ingridients);
});

module.exports = router;
