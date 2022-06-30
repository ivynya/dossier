<script lang="ts">
	import { dossier } from '$lib/app/data';
	import DossierGrid from '$lib/DossierGrid.svelte';
	import FolderBottom from '$lib/FolderBottom.svelte';
	import FolderTop from '$lib/FolderTop.svelte';

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
		<h2>View File</h2>
		<label for="dossier-upload">1. Upload A .Dossier File</label>
		<br /><br />
		<input type="file" name="" id="dossier-upload" on:change={read} />
		<br />
		<h4>2. Tap folder to open</h4>
		<br />
		<p><a href="/edit">&gt; Make your own!</a></p>
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		height: 100vh;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	.dossier {
		display: grid;
		place-items: center;
		flex: 1 1;

		.container {
			display: grid;
			width: 600px;
			max-width: 50vw;
		}
	}

	.editor {
		background-color: #000;
		box-sizing: border-box;
		color: #fff;
		max-height: 100vh;
		padding: 20px 60px;
		width: 300px;

		overflow-y: scroll;

		h2 {
			font-size: 2rem;
		}

		h4 {
			font-weight: normal;
		}

		a {
			color: #fff;
		}
	}
</style>
