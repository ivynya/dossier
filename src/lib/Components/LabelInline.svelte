<script lang="ts">
	import type { DossierItem } from '$lib/app/data';
	export let item: DossierItem;

	$: y = Math.max(item.size.y || 1, 1);
	$: x = Math.max(item.size.x || 8, 3);
</script>

<div class="comp" style="grid-area: span {y} / span {x}">
	<label for="">{item.label}</label>
	<input type="text" spellcheck="false" bind:value={item.value} placeholder="Placeholder" />
</div>

<style lang="scss">
	.comp {
		border: 1px solid #000;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 10px;
		grid-area: span 1 / span 8;
		padding: 5px;

		label {
			font-size: 0.8em;
		}

		input {
			border: none;
			border-bottom: 1px solid #000;
			font-family: inherit;
			font-size: 0.7em;
			flex: 1 1;
			margin: 0;
			padding: 0;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
