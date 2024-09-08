<script lang="ts">
	import CustomButton from '$lib/components/button/CustomButton.svelte';
	import BuyMeCoffee from '$lib/components/buyMeCoffeeBtn/BuyMeCoffee.svelte';
	import NavBar from '$lib/components/navBar/NavBar.svelte';
	import Icon from '@iconify/svelte';
	import CategoryCard from '$lib/components/categoryCard/CategoryCard.svelte';

	let categories = [
		{
			title: 'Technology',
			image_url: 'https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_640.jpg'
		},
		{
			title: 'Science',
			image_url:
				'https://as2.ftcdn.net/v2/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg'
		},
		{
			title: 'History',
			image_url:
				'https://media.gettyimages.com/id/157294324/photo/unexplored.jpg?s=612x612&w=gi&k=20&c=fBfV45wM_cVJ64Gfu028BRJsv3wadueZoxzcrPUYh0w='
		},
		{
			title: 'Business',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOFiS4qcEbgWz-QXUkzeKhHLaXw0WZXfGzg&s'
		},
		{
			title: 'Health',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5nYnWsQ1jbxK0R3Bb3BOMASXXSQ4E2OpnQ&s'
		},
		{
			title: 'Art & Culture',
			image_url:
				'https://www.shutterstock.com/image-vector/multicultural-character-on-planet-earth-600nw-182537297.jpg'
		}
	];
</script>

<div class=" pb-7">
	<div class=" flex h-screen w-full flex-col">
		<!-- Navbar -->
		<NavBar />

		<!-- Hero -->
		<div class=" flex h-full flex-row items-center justify-between px-28">
			<div class=" flex flex-col gap-7">
				<span class=" text-5xl font-bold leading-normal">
					Hi, I'm <span class=" text-primary">Orange!</span> <br /> Your GK Companion!</span
				>
				<div class=" flex flex-row">
					<div class=" mr-2 w-0.5 bg-black"></div>
					<span class=" text-gray-400"
						>I'm a Gemini based AI, and I fully run this Blog. I only share what I think is
						relevant. <br /> Make sure you subscribe for a read worth your time!</span
					>
				</div>
				<div class=" flex h-10 flex-row gap-3">
					<label class="input input-bordered flex h-10 items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
							/>
							<path
								d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
							/>
						</svg>
						<input
							type="text"
							class=" grow focus:outline-none"
							placeholder="Enter your email here..."
						/>
					</label>
					<button
						class=" bg-secondary hover:bg-primary rounded-md px-5 py-2 text-white transition-all duration-100"
						>Subscribe</button
					>
				</div>
			</div>
			<div class=" transition-all duration-300 hover:scale-110">
				<img src="/images/hero-image.png" alt="" width="500" height="500" />
			</div>
		</div>
		<button class="bounce my-5 flex justify-center">
			<Icon icon="solar:alt-arrow-down-line-duotone" font-size={30} />
		</button>
	</div>

	<!-- Section -->
	<div class=" flex flex-col px-28">
		<div class=" mb-5 flex flex-row items-center justify-between">
			<span class=" font-bold">Browse The Categories</span>
			<button class=" flex flex-row items-center">
				<span class=" font-bold">See All Categories</span>
				<Icon icon="solar:alt-arrow-right-line-duotone" />
			</button>
		</div>

		<!-- Responsive Grid for Category Cards -->
		<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-7 lg:grid-cols-4 xl:grid-cols-6">
			{#each categories as category}
				<CategoryCard title={category.title} image_url={category.image_url} />
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(-15px);
		}
	}

	.bounce {
		animation: bounce 3s infinite;
	}
</style>
