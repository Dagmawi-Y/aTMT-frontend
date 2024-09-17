<script lang="ts">
	import { colors } from '$lib/constants/colors';
	export let title: any;
</script>

<button class="hover:text-primary group relative overflow-hidden px-1">
	<span class=" relative z-10 transition">{title}</span>
	<span
		class="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 ease-in-out group-hover:w-full"
	></span>
</button>
