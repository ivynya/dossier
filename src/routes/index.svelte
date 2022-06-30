<script lang="ts">
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
					sort: 10,

					size: {}
				}
			]
		});
	}

	// https://stackoverflow.com/a/18197341/9627251
	function download(filename: string, text: string) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	function read() {
		var r = new FileReader();
		r.onload = function () {
			$dossier = JSON.parse(r.result as string);
		};

		r.readAsText((document.querySelector('#dossier-upload') as HTMLInputElement).files[0]);
	}
</script>

<main>
	<section class="dossier">
		<div class="container">
			<FolderBottom />
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
		<button on:click={() => download('mydossier.dossier', JSON.stringify($dossier))}>
			Download Dossier
		</button>
		<br /><br />
		<label for="dossier-upload">Upload Dossier</label>
		<input type="file" name="" id="dossier-upload" on:change={read} />
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
		max-height: 100vh;
		padding: 20px 60px;
		width: 500px;

		overflow-y: scroll;

		h2 {
			font-size: 2rem;
		}
	}
</style>
