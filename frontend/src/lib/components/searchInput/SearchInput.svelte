<script lang="ts">
	import { onMount } from 'svelte';
	import { debounce } from 'lodash-es';
	import { goto } from '$app/navigation';

	let searchTerm = '';
	let results = [];
	let showResults = false;

	interface SearchResult {
		image: string;
		title: string;
		description: string;
		date: string;
		// Add other relevant blog details as needed
	}

	const searchAPI = async (term: string): Promise<SearchResult[]> => {
		// Replace this with your actual API call
		const response = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
		return await response.json();
	};

	const debouncedSearch = debounce(async (term: string) => {
		if (term.length > 0) {
			results = await searchAPI(term);
			showResults = true;
		} else {
			results = [];
			showResults = false;
		}
	}, 300);

	$: if (searchTerm) {
		debouncedSearch(searchTerm);
	}

	const handleFocus = () => {
		if (searchTerm.length > 0) showResults = true;
	};

	const handleBlur = () => {
		setTimeout(() => {
			showResults = false;
		}, 200);
	};

	const navigateToSearchScreen = () => {
		goto(`/search?q=${encodeURIComponent(searchTerm)}`);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			navigateToSearchScreen();
		}
	};

	onMount(() => {
		// Add any necessary initialization
	});
</script>

<div class="relative">
	<label
		class="focus-within:bg-primary hover:bg-primary flex h-8 items-center gap-2 rounded-md border border-gray-200 transition-all duration-300 ease-in-out focus-within:bg-opacity-20 hover:bg-opacity-20"
	>
		<input
			type="text"
			class="w-full grow bg-transparent px-3 placeholder:text-sm focus:outline-none"
			placeholder="Search"
			bind:value={searchTerm}
			on:focus={handleFocus}
			on:blur={handleBlur}
			on:keydown={handleKeyDown}
		/>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="absolute right-3 h-4 w-4 opacity-70"
		>
			<path
				fill-rule="evenodd"
				d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
				clip-rule="evenodd"
			/>
		</svg>
	</label>

	{#if showResults && results.length > 0}
		<div class="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
			<ul class="py-1">
				{#each results.slice(0, 5) as result}
					<li class="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-100">
						<img
							src={result.image}
							alt={result.title}
							class="mr-3 h-10 w-10 rounded-sm object-cover"
						/>
						<div>
							<div class="font-semibold">{result.title}</div>
							<div class="text-sm text-gray-600">{result.description.slice(0, 50)}...</div>
							<div class="text-xs text-gray-500">{new Date(result.date).toLocaleDateString()}</div>
						</div>
					</li>
				{/each}
			</ul>
			<div
				class="cursor-pointer px-3 py-2 text-center text-sm text-blue-600 hover:bg-gray-100"
				on:click={navigateToSearchScreen}
			>
				Show more results
			</div>
		</div>
	{/if}
</div>

<style>
	/* Add any additional custom styles here if needed */
</style>
