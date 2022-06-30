<script lang="ts">
	import { dossier } from '$lib/app/data';
	export let active = false;
</script>

<div class:active>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 653.36 914.16"
	>
		<defs>
			<linearGradient
				id="d"
				x1="657.41"
				y1="102.16"
				x2="-38.23"
				y2="797.81"
				gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stop-color="#fec33e" />
				<stop offset=".18" stop-color="#fab13e" />
				<stop offset=".44" stop-color="#f69f3e" />
				<stop offset=".71" stop-color="#f3933e" />
				<stop offset="1" stop-color="#f3903f" />
			</linearGradient>
			<linearGradient id="e" x1="657.41" y1="102.17" x2="-38.23" y2="797.8" xlink:href="#d" />
			<filter id="f" filterUnits="userSpaceOnUse">
				<feOffset dx="7" dy="7" />
				<feGaussianBlur result="g" stdDeviation="12" />
				<feFlood flood-color="#5c4319" flood-opacity=".5" />
				<feComposite in2="g" operator="in" />
				<feComposite in="SourceGraphic" />
			</filter>
		</defs>
		<g id="c">
			<rect
				x="29.04"
				y="29.04"
				width="561.1"
				height="841.89"
				rx="10"
				ry="10"
				style="fill:url(#e); filter:url(#f);"
			/>
		</g>
	</svg>
	<h1>{$dossier.name}</h1>
</div>

<style lang="scss">
	div {
		color: #444;
		display: grid;
		place-items: center;
		grid-area: 1/1;
		position: relative;
		z-index: 1;

		transform-origin: left center;
		transition-duration: 1s;
		transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
		&.active {
			transform: scaleX(-1) translateX(-30px);

			h1 {
				opacity: 0;
				transition-delay: 0.25s;
				transition-duration: 0.5s;
			}
		}
	}

	svg {
		grid-area: 1/1;
	}

	h1 {
		grid-area: 1/1;
		opacity: 1;
		transition-delay: 0.6s;
		transition-duration: 0.3s;

		transform: rotate(-5deg);
	}
</style>
