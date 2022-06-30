<script>
	import DossierGrid from '$lib/DossierGrid.svelte';

	import FolderBottom from '$lib/FolderBottom.svelte';
	import FolderLabel from '$lib/FolderLabel.svelte';
	import FolderTop from '$lib/FolderTop.svelte';

	let active = false;
</script>

<main>
	<section class="dossier" on:click={() => (active = !active)}>
		<div class="container">
			<FolderBottom />
			<DossierGrid />
			<FolderTop {active} />
		</div>
	</section>
	<section class="editor">
		<h2>Edit Dossier</h2>
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		height: 100vh;
	}

	.dossier {
		display: grid;
		place-items: center;
		flex: 1 1;

		.container {
			display: grid;
			width: 600px;
		}
	}

	.editor {
		background-color: #000;
		box-sizing: border-box;
		color: #fff;
		padding: 20px 60px;
		width: 500px;

		h2 {
			font-size: 2rem;
		}
	}
</style>
