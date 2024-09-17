<!-- SearchScreen.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let searchResults = [];
	let isLoading = true;
	let searchTerm: any;

	onMount(async () => {
		searchTerm = $page.url.searchParams.get('q');
		if (searchTerm) {
			// Perform the search using your API
			const results = await searchAPI(searchTerm);
			searchResults = results;
			isLoading = false;
		}
	});

	// Your searchAPI function here (same as in the previous component)
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Search Results for {searchTerm}</h1>

	{#if isLoading}
		<p>Loading...</p>
	{:else if searchResults.length === 0}
		<p>No results found.</p>
	{:else}
		<ul>
			{#each searchResults as result}
				<li class="mb-4 flex items-start">
					<img
						src={result.image}
						alt={result.title}
						class="mr-4 h-20 w-20 rounded-sm object-cover"
					/>
					<div>
						<h2 class="font-semibold">{result.title}</h2>
						<p class="text-sm text-gray-600">{result.description}</p>
						<p class="text-xs text-gray-500">{new Date(result.date).toLocaleDateString()}</p>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
