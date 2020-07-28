const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Challenge-Much'));

app.listen(80, () => {
  console.log('Running on port 80');
});

module.exports = app;
