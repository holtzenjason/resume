<script>
	export let title = '';
</script>

<section class="section">
	<h2>{title}</h2>
	<slot />
	<span class="section-end" aria-hidden="true">{title}</span>
</section>

<style lang="scss">
	section {
		position: relative;
		margin-bottom: 1rem;
	}

	h2 {
		margin: 1rem 0rem;
	}
	h2,
	.section-end {
		display: block;
		color: hsla(var(--c1-h), var(--c1-s), calc(var(--c1-l) - 12%), var(--a));
	}

	.section-end {
		position: absolute;
		top: calc(100% - 1rem);
		right: 0%;
		margin: 0rem 1rem 0rem 0rem;
		opacity: 0.2;
		transition: opacity 0.3s ease-in-out;
	}

	h2::before {
		content: '<';
	}

	.section-end::before {
		content: '</';
	}

	h2::after,
	.section-end::after {
		content: '>';
	}

	@media print {
		section {
			margin: 0.5rem 0;
		}
		h2 {
			margin: 0.5rem 0rem;
		}
	}
</style>
