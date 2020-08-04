'use strict';

const fs = require('fs').promises;

const TEMPLATE_FILE = './templates/REAMDE.tpl';
const README_FILE = './README.md';

const addWeather = require('./add-weather');

const generate = async () => {

	const template = await fs.readFile(TEMPLATE_FILE, { encoding: 'utf-8' });

	const newReadme = await addWeather(template);

	await fs.writeFile(README_FILE, newReadme);
};

generate();
