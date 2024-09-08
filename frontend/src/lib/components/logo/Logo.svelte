<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { goto } from '$app/navigation';

	let hover = false;
	let logoSpring = spring(
		{ angle: 0, distance: 100, scale: 0 },
		{
			stiffness: 0.1,
			damping: 0.15
		}
	);

	$: if (hover) {
		logoSpring.set({ angle: 360, distance: 60, scale: 1 });
	} else {
		logoSpring.set({ angle: 0, distance: 100, scale: 0 });
	}

	function goToHome() {
		goto('/');
	}

	onMount(() => {
		// Any initialization if needed
	});
</script>

<button
	class="group relative"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	on:click={goToHome}
>
	<div class="relative z-10">
		<span class="font-poppins text-primary text-xl font-bold">asTheMachineThinkth</span>
	</div>

	<div
		class="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20"
		style="transform: translate(-50%, -50%) rotate({$logoSpring.angle}deg) translateZ({$logoSpring.distance}px) scale({$logoSpring.scale})"
	>
		<img src="/images/orangeBot.png" alt="Logo" class="h-full w-full object-contain" />
	</div>
</button>

<style>
	button {
		transition: transform 0.3s ease;
		perspective: 1000px;
	}

	button:hover {
		transform: scale(1.05);
	}

	div {
		transition: transform 0.5s ease-out;
	}
</style>
