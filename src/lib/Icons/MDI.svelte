<script lang="ts">
	import * as mdIcons from '@mdi/js';
	export let name: keyof typeof mdIcons;
	export let color: string | undefined = undefined;
	export let size: string | undefined = undefined;
</script>

<svg viewBox="0 0 24 24" style="--fill: {color}; --size: {size}">
	<path d={mdIcons[name]} />
</svg>

<style lang="scss">
	svg {
		fill: var(--fill, currentColor);
		width: var(--size, 24px);
		height: var(--size, 24px);
	}
	@media print {
		svg {
			fill: black !important;
		}
	}
</style>
