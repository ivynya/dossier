<script lang="ts">
	import type { DossierItem } from '$lib/app/data';

	export let item: DossierItem;
</script>

<div class="comp">
	<label for="">{item.label}</label>
	<input type="text" name="" id="" spellcheck="false" placeholder="Placeholder" />
</div>

<style lang="scss">
	.comp {
		border: 1px solid #000;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-area: span 2 / span 11;
		padding: 5px;

		label {
			font-size: 0.8em;
		}

		input {
			border: none;
			border-bottom: 1px solid #000;
			font-family: inherit;
			font-size: 0.8em;
			margin: 0;
			margin-top: 5px;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
