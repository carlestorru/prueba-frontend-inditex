export function convertDateFormat(dateToFormat) {
	const date = new Date(dateToFormat);

	const day = date.getUTCDate();
	const month = date.getUTCMonth() + 1;
	const year = date.getUTCFullYear();

	return day + '/' + month + '/' + year;
}
