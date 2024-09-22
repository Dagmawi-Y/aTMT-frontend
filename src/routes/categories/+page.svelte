<script lang="ts">
	import NavBar from '$lib/components/navBar/NavBar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<NavBar />
</div>
