<script lang="ts">
	import type { DossierItem } from '#lib/app/data.js';
	interface Props {
		item: DossierItem;
	}

	let { item }: Props = $props();

	let y = $derived(Math.max(item.size.y || 2, 2));
	let x = $derived(Math.max(item.size.x || 17, 3));
</script>

<div class="comp" style="grid-area: span {y} / span {x}">
	<h1>{item.label}</h1>
</div>

<style lang="scss">
	.comp {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-area: span 2 / span 17;
		padding: 5px;

		h1 {
			margin: 0;
			text-align: center;
		}
	}
</style>
