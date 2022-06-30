<script lang="ts">
	import type { DossierItem } from '$lib/app/data';

	export let item: DossierItem;
</script>

<div class="editor">
	<h3>{item.label}</h3>
	<div>
		<label for="{item.label}-type">Type</label>
		<select id="{item.label}-type" bind:value={item.type}>
			<option value="label">Label</option>
			<option value="label-inline">Label Inline</option>
			<option value="picture">Picture</option>
			<option value="title">Title</option>
		</select>
	</div>
	<div>
		<label for="{item.label}-label">Label</label>
		<input type="text" id="{item.label}-label" bind:value={item.label} />
	</div>
	<div>
		<label for="{item.label}-value">Value</label>
		<input type="text" id="{item.label}-value" bind:value={item.value} />
	</div>
	<div>
		<label for="{item.label}-sx">Size X</label>
		<input type="number" id="{item.label}-sx" bind:value={item.size.x} />
	</div>
	<div>
		<label for="{item.label}-sy">Size Y</label>
		<input type="number" id="{item.label}-sy" bind:value={item.size.y} />
	</div>
</div>

<style>
	.editor {
		border: 1px solid #fff;
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		margin: 20px 0;
		padding: 15px 20px;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 5px;
	}

	label {
		display: inline-block;
		min-width: 50px;
	}

	input,
	select {
		appearance: none;
		background-color: #000;
		border: 1px solid #fff;
		border-radius: 2px;
		color: #fff;
		padding: 5px 10px;
	}
</style>
