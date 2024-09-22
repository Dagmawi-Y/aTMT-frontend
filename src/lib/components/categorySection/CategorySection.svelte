<!-- CategorySection.svelte -->
<script>
	import BlogCard from '../blogCard/BlogCard.svelte';
	import Icon from '@iconify/svelte';
	import NavBarButton from '../navBarButton/NavBarButton.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let category;
</script>

<div class="my-5">
	<div class="mb-2 flex flex-row items-center justify-between">
		<span class="font-bold">{category.name}</span>
		<button class="hover:text-primary flex flex-row items-center font-semibold">
			See All
			<Icon icon="solar:alt-arrow-right-line-duotone" />
		</button>
	</div>
	<div
		class="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each category.latestBlogs.slice(0, 4) as latestBlogs}
			<BlogCard
				image={latestBlogs.image}
				title={latestBlogs.title}
				date={latestBlogs.createdAt}
				author={latestBlogs.author}
				readDuration={latestBlogs.readDuration}
				authorAvatar={latestBlogs.authorAvatar}
				blog_id={latestBlogs._id}
			/>
		{/each}
	</div>
</div>
