interface Sequence {
	state: number;
	length: number;
	x: number;
}

export default function processSequence(
	[current, ...rest]: number[],
	prev?: number,
	array: Sequence[] = [],
	x = 0
): Sequence[] {
	if (current === undefined) return array;

	if (prev !== current) {
		array = [...array, { state: current, length: 1, x }];
		return processSequence(rest, current, array, (x += 1));
	}

	array[array.length - 1].length += 1;
	return processSequence(rest, current, array, (x += 1));
}
