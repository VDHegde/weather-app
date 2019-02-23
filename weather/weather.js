'use strict';

const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ac789133c35a4276f1bc26aa198fea18/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
    })
};

module.exports.getWeather = getWeather;