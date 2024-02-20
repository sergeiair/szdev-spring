
export default function getTotalYears (): number {
	const startDate = new Date(2010, 1, 1); // February 1, 2010
	const currentDate = new Date();
	// @ts-ignore
	const timeDifference = currentDate - startDate;
	const yearsPassed = timeDifference / (365.25 * 24 * 60 * 60 * 1000);

	return Math.floor(yearsPassed);
}
