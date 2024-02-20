
export function omit(key: any, obj: { [x: string]: any; }) {
	const { [key]: omitted, ...rest } = obj;
	return rest;
}

export function getRandomNumberFromRange(min = 2000, max = 4000) {
	if (min > max) {
		[min, max] = [max, min]; // Swap values
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
