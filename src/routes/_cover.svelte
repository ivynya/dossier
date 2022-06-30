<div class="cover">
	<h1>This site works better on a large screen.</h1>
	<p>Visit <b>ds.ivy.direct</b> on a different device to continue!</p>
</div>

<style lang="scss">
	.cover {
		background-color: #000;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 10;

		h1,
		p {
			max-width: 250px;
			text-align: center;
		}
	}

	@media (min-width: 768px) {
		.cover {
			display: none;
		}
	}
</style>
