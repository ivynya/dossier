<script lang="ts">
	import type { DossierItem } from '$lib/app/data';
	export let item: DossierItem;

	$: y = Math.max(item.size.y || 5, 3);
	$: x = Math.max(item.size.x || 17, 3);
</script>

<div class="comp" style="grid-area: span {y} / span {x}">
	<label for="">{item.label}</label>
	<textarea type="text" spellcheck="false" bind:value={item.value} placeholder="Placeholder" />
</div>

<style lang="scss">
	.comp {
		border: 1px solid #000;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-area: span 5 / span 17;
		padding: 5px;

		label {
			font-size: 0.8em;
		}

		textarea {
			border: none;
			font-family: inherit;
			font-size: 0.8em;
			flex: 1 1;
			margin: 0;
			margin-top: 5px;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;

			resize: none;
		}
	}
</style>
