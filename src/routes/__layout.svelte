<script>
	import Cover from './_cover.svelte';
</script>

<slot />
<Cover />

<style lang="scss" global>
	:root {
		font-size: 10px;
	}

	@media (min-width: 992px) {
		:root {
			font-size: 12px;
		}
	}

	@media (min-width: 1200px) {
		:root {
			font-size: 14px;
		}
	}

	@media (min-width: 1500px) {
		:root {
			font-size: 16px;
		}
	}

	body {
		font-family: itc-american-typewriter, monospace;

		min-height: 100vh;

		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	label {
		font-family: mono45-headline, monospace;
	}
</style>
