<script lang="ts">
	export let title: any;
	export let image_url: any;
	export let category_id: any;
</script>

<button
	class="hover:shadow-secondary group relative h-40 overflow-hidden rounded-md bg-slate-50 transition-all duration-300 hover:shadow-md"
>
	<!-- Image Background -->
	<div
		class="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-110"
		style="background-image: url({image_url});"
	></div>

	<!-- Black Overlay on Hover -->
	<div
		class="absolute inset-0 bg-black opacity-15 transition-all duration-300 group-hover:opacity-50"
	></div>

	<!-- Title (centered) -->
	<div
		class="relative z-10 flex h-full w-full items-center justify-center text-lg font-bold text-gray-300 transition-all duration-300 group-hover:text-white"
	>
		{title}
	</div>
</button>
