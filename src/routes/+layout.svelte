<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: minmax(250px, 25%) 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'header header'
			'aside main';
		width: 100%;
		height: 100%;

		@media only screen and (max-width: 650px) {
			grid-template-columns: 100%;
			grid-template-rows: auto auto auto;
			grid-template-areas:
				'header'
				'aside'
				'main';
			height: auto;
		}
	}
</style>
