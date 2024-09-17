<script lang="ts">
	import { onMount } from 'svelte';
	import SearchInput from '../searchInput/SearchInput.svelte';
	import NavBarButton from '../navBarButton/NavBarButton.svelte';
	import { colors } from '$lib/constants/colors';
	import BuyMeCoffee from '../buyMeCoffeeBtn/BuyMeCoffee.svelte';
	import Logo from '../logo/Logo.svelte';

	let y: number;
	let lastY: number = 0;
	let visible: boolean = true;
	let atTop: boolean = true;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		y = window.scrollY;

		// Hide navbar when scrolling down, show when scrolling up
		if (y > lastY && y > 100) {
			visible = false;
		} else if (y < lastY) {
			visible = true;
		}

		// Check if at top of page
		atTop = y < 50;

		lastY = y;
	}
</script>

<div
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
	class:translate-y-0={visible}
	class:translate-y-full={!visible}
	class:bg={atTop}
	class:shadow-md={atTop}
	class:bg-opacity-20={!atTop}
	class:backdrop-blur-sm={!atTop}
	class:px-14={atTop}
	class:px-28={!atTop}
	class:bg-slate-300={!atTop}
>
	<div
		class="flex w-full flex-col items-center justify-between space-y-3 px-4 py-3 transition-all duration-300 md:flex-row md:space-y-0 md:px-16"
	>
		<Logo />
		<div class="flex flex-col items-center gap-5 font-bold md:flex-row md:gap-7">
			<NavBarButton title="Home" />
			<NavBarButton title="Category" />
			<NavBarButton title="About Me" />
		</div>
		<div class="mt-3 w-full md:mt-0 md:w-auto">
			<SearchInput />
		</div>
		<div class="mt-3 md:mt-0">
			<button class="bg-secondary border-secondary rounded-md px-4 py-2 text-white"
				>Buy Me a Coffee</button
			>
		</div>
	</div>
</div>

<style>
	@keyframes slideDown {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-100%);
		}
	}

	.translate-y-0 {
		animation: slideDown 0.3s ease-out;
	}

	.translate-y-full {
		animation: slideUp 0.3s ease-out;
		transform: translateY(-100%);
	}
</style>
