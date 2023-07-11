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
			flex-flow: column nowrap;
		}
	}
</style>
