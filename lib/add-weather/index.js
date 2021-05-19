'use strict';

const WeatherArg = require('weather-arg');

const weatherPlaceholders = require('./weather-placeholders');

const REFERENCE_WEATHER_ID = 4864;

const getRandomWeather = async () => {

	return {
		name: 'Gondolin',
		province: 'Middle Earth',
		temperatureDescription: 'Hay Magia en el Aire',
		temperature: Math.random() * 30,
		weatherId: '11',
		windDirection: 'Calma',
		windSpeed:  Math.random() * 10,
		lastUpdate: new Date()
	};
	/*
	
	Hasta actualizar el package con la nueva API
	
	const weathers = await WeatherArg.getWeathers();
	const weatherReference = await WeatherArg.getWeathersById(REFERENCE_WEATHER_ID);

	const weatherLastUpdated = weathers.filter(({ lastUpdate }) => lastUpdate.toISOString() === weatherReference.lastUpdate.toISOString());

	return weatherLastUpdated[Math.floor(Math.random() * weatherLastUpdated.length)];
	*/
};

module.exports = async template => {

	const weatherRandom = await getRandomWeather();

	return Object.values(weatherPlaceholders).reduce((templateWithWeather, { placeholder, value }) => {
		return templateWithWeather.replace(placeholder, value(weatherRandom));
	}, template);
};
