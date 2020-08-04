'use strict';

module.exports = hour => {

	const clockHour = hour > 11 ? hour - 12 : hour;

	return `:clock${clockHour || '12'}:`;
};
