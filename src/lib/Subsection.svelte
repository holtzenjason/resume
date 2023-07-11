<script>
	export let titleMain = '';
	export let titleExtra = '';
	export let divider = '|';
	export let subtext = '';
</script>

<div class="subsection">
	<h3>
		{titleMain}
		<span class="divider">{divider}</span>
		{titleExtra}
		<span class="subtext">{subtext}</span>
	</h3>

	<slot />
</div>

<style lang="scss">
	.subsection {
		padding: 0 20px;
		&:not(:last-of-type)::after {
			display: block;
			content: '';
			height: 0.2rem;
			width: 70%;
			background: linear-gradient(85deg, var(--c2-light), var(--c2-dark));
			margin: 1rem auto;

			@media print {
				height: 0.2rem;
			}
		}
	}
	h3 {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		width: 100%;
		span {
			display: block;
			&.divider {
				&::before,
				&::after {
					content: ' ';
					padding-left: 1rem;
				}
			}
			&.subtext {
				font-weight: normal;
				margin-left: auto;
				margin-right: 3rem;
			}
		}
	}
	@media print {
		.subsection {
			padding: 0 0 0 10px;
		}
	}
</style>
