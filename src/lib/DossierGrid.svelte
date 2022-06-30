<script>
	import Label from './Components/Label.svelte';
	import LabelInline from './Components/LabelInline.svelte';
	import Picture from './Components/Picture.svelte';
	import Square from './Components/Square.svelte';
</script>

<section class="dossier-page">
	<Label />
	<Picture />
	<Label />
	<Label />
	<Label />
	<LabelInline />
	<LabelInline />
	{#each Array(75) as _}
		<Square />
	{/each}
</section>

<style>
	.dossier-page {
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 15px #0001;
		box-sizing: border-box;

		display: grid;
		grid-area: 1/1;

		grid-template-columns: repeat(17, 1fr);
		grid-template-rows: repeat(25, 1fr);

		margin: 7%;
		margin-right: 8%;
		margin-bottom: 8%;
		padding: 20px;

		transform: rotate(1deg);
	}
</style>
