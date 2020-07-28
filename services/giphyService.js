const axios = require('axios');
require('dotenv/config');

const giphyBaseURL = 'http://api.giphy.com/v1/gifs/random?api_key=OWNG1PhyApiKey&tag=';

const findGifUrl = async (term) => {
  return axios.get(giphyBaseURL + term)
    .then(response => {
      return response.data.data.image_url;
    })
    .catch(error => {
      console.log('Error:', error);
      return 'GIPHY unavailable.';
    });
};

module.exports = {
  findGifUrl: findGifUrl
};
