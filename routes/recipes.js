const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', async (req, res) => {
  const ingridients = req.query.i;

  const recipes = await recipesController.getRecipes(ingridients);

  return res.send(recipes);
});

module.exports = router;
