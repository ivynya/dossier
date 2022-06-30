<script lang="ts">
	import type { DossierItem } from '$lib/app/data';

	export let item: DossierItem;
</script>

<div class="comp">
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
