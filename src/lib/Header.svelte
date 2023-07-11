<script>
	import Logo from './Logo.svelte';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
	<h1>Jason<span class="underspace">&nbsp;</span>Holtzen</h1>
</header>

<style lang="scss">
	header {
		grid-area: header;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
		padding: 1em 2em;

		@media only screen and (max-width: 650px) {
			justify-content: center;
		}

		@media print {
			border-bottom: 2px solid #333;
			padding: 0.5em 1em;
		}
	}
	.logo {
		display: block;
		position: relative;
		height: 5em;
		width: 5em;
		margin: 0;
	}
	h1 {
		margin-left: 0.5em;
		transition: all 0.2s ease-in-out;
		position: relative;

		@media only screen and (max-width: 650px) {
			font-size: 3.8rem;
		}

		.underspace {
			text-decoration: underline;
			white-space: pre;
			&::after {
				content: ' ';
			}
			@media only screen and (max-width: 650px) {
				text-decoration: none;
				&::after {
					display: none;
				}
			}
		}

		&::before,
		&::after,
		.underspace {
			opacity: 0.3;
			text-transform: lowercase;
			transition: opacity 0.3s ease-in-out;
		}

		&::before {
			content: '<dev name="';
			transform-origin: right;

			@media only screen and (max-width: 650px) {
				display: none;
			}
		}
		&::after {
			content: '" type="javascript">';
			transform-origin: left;

			@media only screen and (max-width: 650px) {
				display: none;
			}
		}
		&:hover {
			&::before,
			&::after,
			.underspace {
				opacity: 0.1;
			}
		}
	}
</style>
