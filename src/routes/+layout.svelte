<script>
	import Cover from './Cover.svelte';
</script>

<slot />
<Cover />

<style lang="scss">
	:global(:root) {
		font-size: 10px;
	}

	@media (min-width: 992px) {
		:global(:root) {
			font-size: 12px;
		}
	}

	@media (min-width: 1200px) {
		:global(:root) {
			font-size: 14px;
		}
	}

	@media (min-width: 1500px) {
		:global(:root) {
			font-size: 16px;
		}
	}

	:global(body) {
		font-family: itc-american-typewriter, monospace;

		min-height: 100vh;

		margin: 0;
		padding: 0;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(label) {
		font-family: mono45-headline, monospace;
	}
</style>
