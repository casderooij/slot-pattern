<script lang="ts">
	import createPattern from '$lib/createPattern';
	import processSequence from '$lib/processSequence';

	const rows = 20;
	const rowHeight = 14;
	const margin = 28;
	const cols = 20;
	const colWidth = 14;
	const pattern = createPattern(rows, cols, 25, 0.5, 0.2);

	const svgWidth = cols * colWidth;
	const svgHeight = rows * rowHeight;
</script>

<svg width={svgWidth} height={svgHeight}>
	{#each $pattern as row, index}
		<g transform="translate(0, {index * margin})">
			{#each processSequence(row) as s}
				<g transform="translate({s.x * colWidth}, 0)">
					{#if s.state === 1}
						<rect width={s.length * colWidth} height={rowHeight} rx={rowHeight / 2} />
					{/if}
				</g>
			{/each}
		</g>
	{/each}
</svg>

<style>
	rect {
		fill: #2a2a2a;
	}
</style>
