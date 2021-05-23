'use strict';

const WeatherArg = require('weather-arg');
const weatherPlaceholders = require('./weather-placeholders');
const fakeWeather = require('./fake-weather/index');

const REFERENCE_WEATHER_ID = 4864;

const getRandomWeather = async () => {

	try {
		const weathers = await WeatherArg.getWeathers();
		const weatherReference = await WeatherArg.getWeathersById(REFERENCE_WEATHER_ID);
		const weatherLastUpdated = weathers.filter(({ lastUpdate }) => lastUpdate.toISOString() === weatherReference.lastUpdate.toISOString());

		return weatherLastUpdated[Math.floor(Math.random() * weatherLastUpdated.length)];

	} catch(error) {
		return fakeWeather;
	}
};

module.exports = async template => {

	const weatherRandom = await getRandomWeather();

	return Object.values(weatherPlaceholders).reduce((templateWithWeather, { placeholder, value }) => {
		return templateWithWeather.replace(placeholder, value(weatherRandom));
	}, template);
};
