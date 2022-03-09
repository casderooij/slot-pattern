import * as random from 'canvas-sketch-util/random';
import { mapRange } from 'canvas-sketch-util/math';
import { readable, type Readable } from 'svelte/store';

export default function createPattern(
	rows: number,
	cols: number,
	seed = 10,
	threshold: number,
	frequency = 0.2
	// ): number[][] {
): Readable<number[][]> {
	random.setSeed(seed);
	const pattern = [];

	for (let i = 0; i < rows; i++) {
		const rowPattern = [];
		for (let j = 0; j < cols; j++) {
			let n = random.noise2D(i, j, frequency, 1);
			n = mapRange(n, -1, 1, 0, 1);
			if (n < threshold) {
				rowPattern.push(0);
			} else {
				rowPattern.push(1);
			}
		}
		pattern.push(rowPattern);
	}

	const store = readable<number[][]>(pattern);

	return store;
}
