const recipePuppyService = require('../services/recipePuppyService');
const giphyService = require('../services/giphyService');

const updateRecipesGifs = async (recipes) => {
  return await Promise.all(recipes.map(async recipe => {
    recipe.gif = await giphyService.findGifUrl(recipe.title);
    return recipe;
  }));
};

/**
 * from: [{ title, ingredients, href, thumbnail }]
 * to: [{ title, ingredients, link, gif }]
 * ingredients from a string to an ordered array
 */
const formatRecipes = (recipes) => {
  return recipes.map(recipe => {
    let { title, ingredients, href, thumbnail } = recipe;
    ingredients = ingredients.split(', ').sort();
    return { title: title, ingredients: ingredients, link: href, gif: thumbnail };
  });
};

const getRicpes = async (ingridients) => {
  const keywords = ingridients.split(',').slice(0, 3);

  let recipes = await recipePuppyService.findRecipes(keywords);
  recipes = formatRecipes(recipes);
  recipes = await updateRecipesGifs(recipes);

  return { keywords, recipes };
};

module.exports = {
  getRecipes: getRicpes
};
