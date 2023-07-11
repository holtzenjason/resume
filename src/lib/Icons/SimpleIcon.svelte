<script lang="ts">
	import * as icons from 'simple-icons';
	export let name: keyof typeof icons;
	export let color: string | undefined = undefined;
	export let size: string | undefined = undefined;
	export let useHex: boolean = false;
	$: path = icons[name].path;
	$: hex = icons[name].hex;
</script>

<svg viewBox="0 0 24 24" style="--fill: {useHex && hex ? `#${hex}` : color}; --size: {size}">
	<path d={path} />
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
