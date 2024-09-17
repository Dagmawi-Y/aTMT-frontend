<script>
	export let image;
	export let title;
	export let date;
	export let author;
	export let readDuration;
	export let authorAvatar;
</script>

<button class="  transition-all duration-200 hover:rotate-1 hover:scale-95 hover:shadow-lg"
	><div class=" flex flex-col rounded-md bg-slate-100 px-3 py-3 shadow-md">
		<!-- Blog card top/Image and title -->
		<div class=" pb-10">
			<div class="flex h-24">
				<img src={image} alt="" class=" h-full w-full rounded-md object-cover" />
			</div>
			<span class=" mx-2 text-sm font-bold">{title}</span>
		</div>

		<!-- Blog card bottom -->
		<div class=" flex flex-row gap-2">
			<img src={authorAvatar} alt="" style="width: 30px; height: 30px;" class=" rounded-full" />

			<div class=" flex flex-col items-start text-start">
				<span class=" text-xs font-semibold">{author}</span>
				<span class=" text-xs">{date + ' . ' + readDuration}</span>
			</div>
		</div>
	</div></button
>
