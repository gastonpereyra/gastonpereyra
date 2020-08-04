'use strict';

const getClockIcon = require('./get-clock-icon');
const getTemperatureIcon = require('./get-temperature-icon');

const weatherDescription = require('./weather-description');
const weatherIcon = require('./weather-icons');
const weatherWindDescription = require('./weather-wind-description');
const weatherWindIcon = require('./weather-wind-icon');

module.exports = {
	WEATHER_TIME: {
		placeholder: '{{WEATHER_TIME}}',
		value: ({ lastUpdate }) => {
			return getClockIcon(lastUpdate.getHours());
		}
	},
	WEATHER_PLACE: {
		placeholder: '{{WEATHER_PLACE}}',
		value: ({ name }) => name
	},
	WEATHER_PROVINCE: {
		placeholder: '{{WEATHER_PROVINCE}}',
		value: ({ province }) => province
	},
	WEATHER_TEMP: {
		placeholder: '{{WEATHER_TEMP}}',
		value: ({ temperatureDescription }) => temperatureDescription
	},
	WEATHER_TEMP_COLOR: {
		placeholder: '{{WEATHER_TEMP_COLOR}}',
		value: ({ temperature }) => getTemperatureIcon(temperature)
	},
	WEATHER_DESC: {
		placeholder: '{{WEATHER_DESC}}',
		value: ({ weatherId, description }) => weatherDescription[weatherId] || description
	},
	WEATHER_ICON: {
		placeholder: '{{WEATHER_ICON}}',
		value: ({ weatherId }) => weatherIcon[weatherId]
	},
	WEATHER_WIND: {
		placeholder: '{{WEATHER_WIND}}',
		value: ({ windSpeed }) => windSpeed || 0
	},
	WEATHER_WDIR: {
		placeholder: '{{WEATHER_WDIR}}',
		value: ({ windDirection }) => weatherWindDescription[windDirection] || windDirection
	},
	WEATHER_WDIR_ICON: {
		placeholder: '{{WEATHER_WDIR_ICON}}',
		value: ({ windDirection }) => weatherWindIcon[windDirection] || weatherWindIcon.default
	}
};
