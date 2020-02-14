const axios = require('axios');

module.exports = async function(coords) {
  let resp;
  try {
    response = await axios({
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=7db91fe431e03b68585256ef75b7bcd6&units=metric&lang=en`,
      method: 'get'
    });
    resp = response.data;
  } catch (error) {
    resp = {
    message: error.response.statusText
  };
  }
  return resp;
}
