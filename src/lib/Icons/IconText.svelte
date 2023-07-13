<script lang="ts">
	import { onMount } from 'svelte';
	import type MDI from './MDI.svelte';
	import type SimpleIcon from './SimpleIcon.svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	interface $$Slots {
		icon: MDI | SimpleIcon;
		default: HTMLElement | string;
	}
	let el: HTMLElement;
	export let gap = '0.75em';
	export let srText: string | undefined = undefined;

	onMount(() => {
		if (srText) {
			tippy(el, {
				allowHTML: true,
				placement: 'left',
				theme: 'material',
				maxWidth: 'none',
				interactive: true,
				content: srText
			});
		}
	});
</script>

<div bind:this={el} style="gap: {gap};">
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
