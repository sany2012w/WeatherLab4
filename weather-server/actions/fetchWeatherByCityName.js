const axios = require('axios');

module.exports = async function(cityName) {
  let resp;
  try {
    response = await axios({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7db91fe431e03b68585256ef75b7bcd6&units=metric&lang=en`,
      method: 'get'
    });
    resp = response.data;
  } catch (error) {
    resp = {
    message: error.response.statusText
  };
  }
  return resp;
};
