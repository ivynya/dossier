<script>
	import { dossier } from '$lib/app/data';
	import Label from '$lib/Components/Label.svelte';
	import LabelInline from '$lib/Components/LabelInline.svelte';
	import Picture from '$lib/Components/Picture.svelte';
	import Title from './Components/Title.svelte';

	let active = false;

	let rotation = Math.random() * 3 - 1.5;
</script>

<section
	class="dossier-page"
	style="transform: rotate({rotation}deg);"
	class:active
	on:click={() => (active = !active)}
>
	{#each $dossier.items as item}
		{#if item.type === 'label'}
			<Label {item} />
		{:else if item.type === 'label-inline'}
			<LabelInline {item} />
		{:else if item.type === 'picture'}
			<Picture {item} />
		{:else if item.type === 'title'}
			<Title {item} />
		{/if}
	{/each}
</section>

<style lang="scss">
	.dossier-page {
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 15px #0002;
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

		position: relative;

		transform-origin: left center;
		transition-duration: 1s;
		transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
		&.active {
			transform: scaleX(-1) translateX(10%) !important;
			z-index: 5;
		}
	}
</style>
