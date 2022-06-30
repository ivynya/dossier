<script lang="ts">
	import type { DossierItem } from '$lib/app/data';

	export let item: DossierItem;
</script>

<div class="editor">
	<h3>{item.label}</h3>
	<input type="text" name="" id="" bind:value={item.label} />
	<select name="" id="" bind:value={item.type}>
		<option value="label">Label</option>
		<option value="label-inline">Label Inline</option>
		<option value="picture">Picture</option>
		<option value="title">Title</option>
	</select>
</div>

<style>
	.editor {
		border: 1px solid #fff;
		margin: 20px 0;
		padding: 15px 20px;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 5px;
	}
</style>
