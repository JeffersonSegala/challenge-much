/* eslint-disable no-undef */
const recipesController = require('../controllers/recipesController');

const assert = require('assert');
describe('Get recipes test', () => {
  it('The result should have keywords and recipes', async () => {
    const result = await recipesController.getRecipes('tomato,cheese');
    assert.notStrictEqual(result.keywords, undefined);
    assert.notStrictEqual(result.recipes, undefined);
  });
  it('Should accept no more than 3 ingredients', async () => {
    const result = await recipesController.getRecipes('tomato,cheese,onion,ham');
    assert.deepEqual(result.keywords, ['tomato', 'cheese', 'onion']);
  });
});
