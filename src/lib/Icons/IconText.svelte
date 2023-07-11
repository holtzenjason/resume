<script lang="ts">
	import type MDI from './MDI.svelte';
	import type SimpleIcon from './SimpleIcon.svelte';
	import { tooltip } from '$lib/Tooltip';

	export let gap = '0.75em';
	export let srText: string | undefined = undefined;

	interface $$Slots {
		icon: MDI | SimpleIcon;
		default: HTMLElement | string;
	}
</script>

<div style="gap: {gap};" use:tooltip={{ content: srText }}>
	<slot name="icon" />
	{#if srText}
		<span class="sr-only">{srText}</span>
	{/if}
	<slot />
</div>

<style lang="scss">
	div {
		align-items: center;
		display: grid;
		grid-template-columns: auto 1fr;
		min-width: 100%;
		width: 100%;
	}
</style>
