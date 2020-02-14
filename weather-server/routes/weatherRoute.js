const express = require('express');
const axios = require('axios');
const fetchWeatherByCityName = require('../actions/fetchWeatherByCityName');
const fetchWeatherByCoords = require('../actions/fetchWeatherByCoords');

module.exports = function(app) {

  app.get('/weather', async (req, res) => {
    const cityName = req.query.city;
    const resp = await fetchWeatherByCityName(cityName);
    res.send(resp);
  });

  app.get('/weather/coordinates', async (req, res) => {
    const coords = {
       lat: req.query.lat,
       lon: req.query.long
    }
    const resp = await fetchWeatherByCoords(coords);
    res.send(resp);
  });

};
