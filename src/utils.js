import config from 'config';

export const getSearchUrl = (searchTerm, currPageCount) => (
	config.apiUrl +
	`api_key=${config.apiKey}` +
	`&q=${searchTerm}` +
	`&offset=${config.limit}` +
	`offset=${currPageCount}` +
	'&rating=G&lang=en'
);

export const getTimeDiffInSeconds = (start, end) =>
	Math.floor((parseInt(end) - parseInt(start)) / 1000);