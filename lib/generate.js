'use strict';

const fs = require('fs').promises;
const WeatherArg = require('weather-arg');

const TEMPLATE_FILE = './templates/REAMDE.tpl';
const README_FILE = './README.md';

const WEATHER_TIME = '{{WEATHER_TIME}}';
const WEATHER_PLACE = '{{WEATHER_PLACE}}';
const WEATHER_PROVINCE = '{{WEATHER_PROVINCE}}';
const WEATHER_TEMP = '{{WEATHER_TEMP}}';
const WEATHER_TEMP_COLOR = '{{WEATHER_TEMP_COLOR}}';
const WEATHER_DESC = '{{WEATHER_DESC}}';
const WEATHER_ICON = '{{WEATHER_ICON}}';
const WEATHER_WIND = '{{WEATHER_WIND}}';
const WEATHER_WDIR = '{{WEATHER_WDIR}}';
const WEATHER_WDIR_ICON = '{{WEATHER_WDIR_ICON}}';

const weatherIcon = {
	0: ':sunny:',
	1: ':partly_sunny:',
	2: ':partly_sunny:',
	3: ':umbrella:',
	4: ':zap:',
	5: ':snowflake:',
	6: ':droplet:',
	7: ':snowman:',
	8: ':cyclone:',
	9: ':cloud:',
	10: ':cloud:',
	11: ':droplet:',
	12: ':foggy:',
	13: ':umbrella:',
	14: ':zap:',
	15: ':partly_sunny:',
	16: ':cloud:',
	17: ':snowflake:',
	18: ':cloud:',
	19: ':cyclone:',
	20: ':dash:'
};

const weatherDesc = {
	0: 'Sunny',
	1: 'Sunny Overcast',
	2: 'Cloudy High',
	3: 'Rainy',
	4: 'Thunderstorm',
	5: 'Snowfall',
	6: 'Drizzle',
	7: 'Snow',
	9: 'Cloudy Down',
	10: 'Cloudy',
	11: 'Isolated drizzles',
	12: 'Unstable',
	13: 'Rain Mix',
	14: 'Isolated Storms',
	15: 'Variable Cloudiness',
	16: 'Cloudy Down',
	17: 'Snow Thunderstorm',
	18: 'Cloudy',
	20: 'Strong Wind'
};

const weatherWindDirDesc = {
	Oeste: 'West',
	Sur: 'South',
	Norte: 'North',
	Este: 'East',
	Noroeste: 'North-West',
	Noreste: 'North-East',
	Suroeste: 'South-West',
	Sureste: 'South-East'
};

const weatherWindDirIcon = {
	Oeste: ':arrow_right:',
	Sur: ':arrow_down:',
	Norte: ':arrow_up:',
	Este: ':arrow_left:',
	Noroeste: ' :arrow_upper_right:',
	Noreste: ':arrow_upper_left:',
	Suroeste: ':arrow_lower_right:',
	Sureste: ':arrow_lower_left:'
};

const weatherTempDesc = temp => {

	if(temp > 30)
		return ':heart:';

	if(temp > 20)
		return ':yellow_heart:';

	if(temp > 10)
		return ':green_heart:';

	if(temp > 0)
		return ':blue_heart:';

	return ':purple_heart:';
};

const weatherTime = hour => {
	if(hour === 0 || hour === 12)
		return ':clock12:';

	if(hour === 1 || hour === 13)
		return ':clock1:';

	if(hour === 2 || hour === 14)
		return ':clock2:';

	if(hour === 3 || hour === 15)
		return ':clock3:';

	if(hour === 4 || hour === 16)
		return ':clock4:';

	if(hour === 5 || hour === 17)
		return ':clock5:';

	if(hour === 6 || hour === 18)
		return ':clock6:';

	if(hour === 7 || hour === 19)
		return ':clock7:';

	if(hour === 8 || hour === 20)
		return ':clock8:';

	if(hour === 9 || hour === 21)
		return ':clock9:';

	if(hour === 10 || hour === 22)
		return ':clock10:';

	if(hour === 11 && hour === 23)
		return ':clock11:';
};

const generate = async () => {

	const [weather] = await WeatherArg.getWeathersByName('Capital Federal');

	const hour = new Date(weather.lastUpdate).getHours();

	const template = await fs.readFile(TEMPLATE_FILE, { encoding: 'utf-8' });

	let newReadme = template.replace(WEATHER_TIME, weatherTime(hour));
	newReadme = newReadme.replace(WEATHER_PLACE, weather.name);
	newReadme = newReadme.replace(WEATHER_PROVINCE, weather.province);
	newReadme = newReadme.replace(WEATHER_TEMP, weather.temperatureDescription);
	newReadme = newReadme.replace(WEATHER_TEMP_COLOR, weatherTempDesc(weather.temperature));
	newReadme = newReadme.replace(WEATHER_DESC, weatherDesc[weather.weatherId] || weather.description);
	newReadme = newReadme.replace(WEATHER_ICON, weatherIcon[weather.weatherId]);
	newReadme = newReadme.replace(WEATHER_WIND, weather.windSpeed);
	newReadme = newReadme.replace(WEATHER_WDIR, weatherWindDirDesc[weather.windDirection] || weather.windDirection);
	newReadme = newReadme.replace(WEATHER_WDIR_ICON, weatherWindDirIcon[weather.windDirection] || ':ok:');

	await fs.writeFile(README_FILE, newReadme);
};

generate();
