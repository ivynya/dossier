<script>
	import { dossier } from '$lib/app/data';
	import CompEditor from '$lib/CompEditor.svelte';
	import DossierGrid from '$lib/DossierGrid.svelte';
	import FolderBottom from '$lib/FolderBottom.svelte';
	import FolderTop from '$lib/FolderTop.svelte';

	function addItem() {
		dossier.set({
			...$dossier,
			items: [
				...$dossier.items,
				{
					label: 'New Item',
					type: 'label',
					sort: 10
				}
			]
		});
	}
</script>

<main>
	<section class="dossier">
		<div class="container">
			<FolderBottom />
			<DossierGrid />
			<DossierGrid />
			<DossierGrid />
			<FolderTop />
		</div>
	</section>
	<section class="editor">
		<h2>Edit Dossier</h2>
		{#each $dossier.items as item}
			<CompEditor bind:item />
		{/each}
		<button on:click={addItem}>Add Item</button>
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
