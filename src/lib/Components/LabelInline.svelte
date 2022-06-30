<div class="comp">
	<label for="">Label</label>
	<input type="text" name="" id="" spellcheck="false" placeholder="Placeholder" />
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
