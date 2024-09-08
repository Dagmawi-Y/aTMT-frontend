<script lang="ts">
	import { onMount } from 'svelte';
	export let name = 'dagmawi';
	export let color = '#5F7FFF';
	export let emoji = '';
	export let font = 'Poppins';
	export let text = 'Buy me a coffee';
	export let outlineColor = '#000000';
	export let fontColor = '#ffffff';
	export let coffeeColor = '#FFDD00';
	let buttonContainer: HTMLElement;

	function loadBuyMeCoffeeScript() {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
			script.onload = resolve;
			script.onerror = reject;
			document.body.appendChild(script);
		});
	}

	function createButton() {
		if (window.BmcButton) {
			new window.BmcButton({
				element: buttonContainer,
				name,
				color,
				emoji,
				font,
				text,
				outline_color: outlineColor,
				font_color: fontColor,
				coffee_color: coffeeColor
			});
		}
	}

	onMount(async () => {
		await loadBuyMeCoffeeScript();
		createButton();
	});
</script>

<div bind:this={buttonContainer}></div>

<style>
	div {
		display: inline-block;
	}
</style>
