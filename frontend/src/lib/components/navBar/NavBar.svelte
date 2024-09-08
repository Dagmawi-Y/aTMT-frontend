<script lang="ts">
	import SearchInput from '../searchInput/SearchInput.svelte';
	import NavBarButton from '../navBarButton/NavBarButton.svelte';
	import { colors } from '$lib/constants/colors';
	import BuyMeCoffee from '../buyMeCoffeeBtn/BuyMeCoffee.svelte';
	import Logo from '../logo/Logo.svelte';
</script>

<div class=" flex w-full flex-row items-center justify-between px-7 py-3 shadow-sm">
	<Logo />
	<div class=" flex gap-7 font-bold">
		<NavBarButton title="Home" />
		<NavBarButton title="Category" />
		<NavBarButton title="About Me" />
	</div>
	<div><SearchInput /></div>
	<!-- <BuyMeCoffee /> -->
	<div class="">
		<button class=" bg-secondary rounded-md px-5 py-2 text-white">Buy Me a Coffee</button>
	</div>
</div>
