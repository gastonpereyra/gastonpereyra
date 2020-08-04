'use strict';

const {
	hot,
	warm,
	normal,
	cold,
	freeze
} = require('./weather-temperature-icon.json');

module.exports = temp => {

	if(temp >= 30)
		return hot;

	if(temp >= 20)
		return warm;

	if(temp >= 10)
		return normal;

	if(temp >= 0)
		return cold;

	return freeze;
};
