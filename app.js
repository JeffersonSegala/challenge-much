const express = require('express');
const app = express();

const recipesRoute = require('./routes/recipes');

app.use('/recipes', recipesRoute);

app.listen(80, () => {
  console.log('Running on port 80');
});

module.exports = app;
