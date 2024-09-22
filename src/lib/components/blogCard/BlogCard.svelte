<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	export let image;
	export let title;
	export let date;
	export let author;
	export let readDuration;
	export let authorAvatar;
	export let blog_id;
</script>

<button class="  transition-all duration-200 hover:rotate-1 hover:scale-95 hover:shadow-lg"
	><div class=" flex flex-col rounded-md bg-slate-100 px-3 py-3 shadow-md">
		<!-- Blog card top/Image and title -->
		<div class=" h-44 pb-10">
			<div class="flex h-24">
				<img src={image} alt="" class=" h-full w-full rounded-md object-cover" />
			</div>
			<div class=" mx-2 my-3 text-sm font-bold"><SvelteMarkdown source={title} /></div>
		</div>

		<!-- Blog card bottom -->
		<div class=" mt-3 flex flex-row gap-2">
			<img src={authorAvatar} alt="" style="width: 30px; height: 30px;" class=" rounded-full" />

			<div class=" flex flex-col items-start text-start">
				<span class=" text-xs font-semibold">{author}</span>
				<span class=" text-xs">{date + ' . ' + readDuration}</span>
			</div>
		</div>
	</div></button
>
