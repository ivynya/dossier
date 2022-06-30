<script>
	import Cover from './_cover.svelte';
</script>

<slot />
<Cover />

<style lang="scss" global>
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
