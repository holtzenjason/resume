<script>
	export let titleMain = '';
	export let titleExtra = '';
	export let divider = '|';
	export let subtext = '';
</script>

<div class="subsection">
	<h3>
		<span>{titleMain}</span>
		<span class="divider">{divider}</span>
		<span>{titleExtra}</span>
		<span class="subtext">{subtext}</span>
	</h3>

	<slot />
</div>

<style lang="scss">
	.subsection {
		padding: 0 20px;

		@media only screen and (max-width: 650px) {
			padding: 0 1rem;

			&:last-of-type {
				padding-bottom: 1rem;
			}
		}

		@media print {
			padding: 0 0 0 0.1rem;
		}

		&:not(:last-of-type)::after {
			display: block;
			content: '';
			height: 0.2rem;
			width: 70%;
			background: linear-gradient(85deg, var(--c2-light), var(--c2-dark));
			margin: 1rem auto;

			@media only screen and (max-width: 650px) {
				margin: 1.5rem auto;
			}

			@media print {
				height: 0.2rem;
				padding: 0 0 0 10px;
			}
		}
	}
	h3 {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		max-width: 100%;
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
				text-align: right;
			}
		}

		@media only screen and (max-width: 650px) {
			align-items: flex-start;
			justify-content: space-between;
			flex-flow: row wrap;
			margin: 0.5em 0;
			padding: 0;

			span {
				margin: 0;

				&:first-of-type {
					font-weight: bold;
					text-decoration: underline;
				}

				&:not(:first-of-type) {
					margin-left: 1em;
				}

				&.divider {
					display: none;
				}
				&.subtext {
					width: 100%;
					margin: 0;
				}
			}
		}
	}
</style>
