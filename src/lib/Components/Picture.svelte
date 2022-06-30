<script lang="ts">
	import type { DossierItem } from '$lib/app/data';
	export let item: DossierItem;

	$: y = Math.max(item.size.y || 8, 2);
	$: x = Math.max(item.size.x || 6, 2);
</script>

<div class="comp" style="grid-area: span {y} / span {x}">
	<img src={item.value} alt={item.label} />
</div>

<style lang="scss">
	.comp {
		border: 1px solid #000;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-area: span 8 / span 6;
		padding: 5px;

		img {
			border-radius: 5px;
			box-shadow: 0 0 10px #0003;
			max-height: 100%;
			max-width: 100%;
			transform: rotate(-2deg);
		}
	}
</style>
