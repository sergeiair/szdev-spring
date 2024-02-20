
export function generateArray(n: number): number[] {
	const randomArray: number[] = [];

	for (let i = 0; i < n; i++) {
		randomArray.push(Math.floor(Math.random() * (n + 1)));
	}

	return randomArray;
}
