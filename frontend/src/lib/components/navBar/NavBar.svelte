<script lang="ts">
	import SearchInput from '../searchInput/SearchInput.svelte';
	import NavBarButton from '../navBarButton/NavBarButton.svelte';
	import { colors } from '$lib/constants/colors';
	import BuyMeCoffee from '../buyMeCoffeeBtn/BuyMeCoffee.svelte';
	import Logo from '../logo/Logo.svelte';
</script>

<div
	class="flex w-full flex-col items-center justify-between space-y-3 px-4 py-3 shadow-md md:flex-row md:space-y-0 md:px-16"
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
		<button class="bg-secondary rounded-md px-4 py-2 text-white">Buy Me a Coffee</button>
	</div>
</div>
