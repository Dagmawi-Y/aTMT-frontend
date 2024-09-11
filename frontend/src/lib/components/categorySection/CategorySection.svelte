<!-- CategorySection.svelte -->
<script>
	import BlogCard from '../blogCard/BlogCard.svelte';
	import Icon from '@iconify/svelte';
	import NavBarButton from '../navBarButton/NavBarButton.svelte';

	export let category;
</script>

<div class=" my-5">
	<div class="mb-2 flex flex-row items-center justify-between">
		<span class="font-bold">{category.title}</span>
		<button
			class="hover:text-primary flex flex-row items-center font-semibold
        "
		>
			See All
			<Icon icon="solar:alt-arrow-right-line-duotone" />
		</button>
	</div>
	<div
		class="grid h-full w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
	>
		{#each category.posts as post}
			<BlogCard
				image={post.image}
				title={post.title}
				date={post.date}
				author={post.author}
				readDuration={post.readDuration}
				authorAvatar={post.authorAvatar}
			/>
		{/each}
	</div>
</div>
