'use strict';

module.exports = [
	{
		name: 'Gondolin',
		province: 'Beleriand',
		temperature: {
			min: -5,
			max: 15
		},
		maxWindSpeed: 20,
		types: [0, 1, 2, 3, 4, 5, 7, 9, 10, 13, 15]
	},
	{
		name: 'Rivendel',
		province: 'Eriador',
		temperature: {
			min: -10,
			max: 20
		},
		maxWindSpeed: 10,
		types: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13]
	},
	{
		name: 'Minas Morgul',
		province: 'Mordor',
		temperature: {
			min: 25,
			max: 55
		},
		maxWindSpeed: 1,
		types: [9, 16, 18]
	},
	{
		name: 'Minas Tirith',
		province: 'Gondor',
		temperature: {
			min: 10,
			max: 25
		},
		maxWindSpeed: 5,
		types: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14]
	},
	{
		name: 'Armenelos',
		province: 'Numenor',
		temperature: {
			min: 10,
			max: 25
		},
		maxWindSpeed: 30,
		types: [0, 1, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 19]
	}
];
