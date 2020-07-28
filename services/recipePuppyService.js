const axios = require('axios');

const recipePuppyBaseURL = 'http://www.recipepuppy.com/api/?i=';

const findRecipes = async (ingridients) => {
  return axios.get(recipePuppyBaseURL + ingridients)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log('Error:', error);
      return 'Recipepuppy unavailable.';
    });
};

module.exports = {
  findRecipes: findRecipes
};
