'use strict';

const places = require('./places');
const windDescription = require('../weather-wind-description');

const roundDecimal = (number, decimals) => Number(number.toFixed(decimals));
const getRandomItem = items => items[Math.floor(Math.random() * items.length)];

const formatTemperature = (min, max) => roundDecimal(Math.random() * (max - min) + min, 2);

const formatWindSpeed = (max, weatherId) => {
	const speed = roundDecimal(Math.random() * max, 2);
	return [8, 19, 20].includes(weatherId) ? speed + 80 : speed;
};

const windDirectionKeys = Object.keys(windDescription);

const {
	name,
	province,
	temperature,
	maxWindSpeed,
	types
} = getRandomItem(places);

const temp = formatTemperature(temperature.min, temperature.max);
const windDirection = getRandomItem(windDirectionKeys);
const weatherId = getRandomItem(types);

module.exports = {
	name,
	province,
	temperatureDescription: `${temp}°C`,
	temperature: temp,
	weatherId,
	windDirection,
	windSpeed: formatWindSpeed(maxWindSpeed, weatherId),
	lastUpdate: new Date()
};
