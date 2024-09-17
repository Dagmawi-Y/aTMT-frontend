<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { goto } from '$app/navigation';

	let hover = false;
	let logoSpring = spring(
		{ x: 0, opacity: 0 },
		{
			stiffness: 0.2,
			damping: 1
		}
	);

	$: if (hover) {
		logoSpring.set({ x: 5, opacity: 1 }); // Slide out 30px to the right and become visible
	} else {
		logoSpring.set({ x: 0, opacity: 0 }); // Slide back and disappear
	}

	function goToHome() {
		goto('/');
	}

	onMount(() => {
		// Any initialization if needed
	});
</script>

<button
	class="group relative inline-flex items-center"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	on:click={goToHome}
>
	<div class="relative z-10">
		<span
			class="font-poppins text-primary text-xl font-bold opacity-80 transition-all duration-200 hover:opacity-100"
			>OrangeAI</span
		>
	</div>

	<!-- The logo is placed right next to the text -->
	<div
		class="pointer-events-none absolute h-10 w-10"
		style="transform: translateX({$logoSpring.x}px) translateY(-50%); opacity: {$logoSpring.opacity}; left: 100%; top: 50%;"
	>
		<img src="/images/orangeBot.png" alt="Logo" class="h-full w-full object-contain" />
	</div>
</button>

<style>
	button {
		transition: transform 0.3s ease;
		position: relative; /* Ensure relative positioning of the button */
	}

	button:hover {
		transform: scale(1);
	}

	div {
		transition: transform 0.5s ease-out;
	}
</style>
