<script lang="ts">
	import CustomButton from '$lib/components/button/CustomButton.svelte';
	import BuyMeCoffee from '$lib/components/buyMeCoffeeBtn/BuyMeCoffee.svelte';
	import NavBar from '$lib/components/navBar/NavBar.svelte';
	import Icon from '@iconify/svelte';
	import CategoryCard from '$lib/components/categoryCard/CategoryCard.svelte';
	import BlogCard from '$lib/components/blogCard/BlogCard.svelte';
	import { onMount } from 'svelte';
	import NavBarButton from '$lib/components/navBarButton/NavBarButton.svelte';
	import CategorySection from '$lib/components/categorySection/CategorySection.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	let categories = [
		{
			title: 'Technology',
			image_url: 'https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_640.jpg',
			posts: [
				{
					image:
						'https://images.unsplash.com/photo-1510937871818-95a237a04725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'AI Revolution: What You Should Know',
					date: 'September 1, 2024',
					author: 'Jane Smith',
					readDuration: '5 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2017/03/31/19/38/avatar-2895907_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1555066931-4365d1472c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'The Ethics of Artificial Intelligence',
					date: 'August 25, 2024',
					author: 'Michael Brown',
					readDuration: '7 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/avatar-1295673_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: "Cloud Computing: A Beginner's Guide",
					date: 'August 18, 2024',
					author: 'Jessica Garcia',
					readDuration: '6 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2018/04/16/16/29/avatar-3325441_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
					title: 'The Importance of Cybersecurity in 2024',
					date: 'August 11, 2024',
					author: 'David Rodriguez',
					readDuration: '4 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_1280.png'
				}
			]
		},
		{
			title: 'Science',
			image_url:
				'https://as2.ftcdn.net/v2/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg',
			posts: [
				{
					image:
						'https://images.unsplash.com/photo-1564392629728-3c5f26d0a261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
					title: 'The Science Behind Quantum Physics',
					date: 'August 25, 2024',
					author: 'Alex Johnson',
					readDuration: '8 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1590402744901-709739f1e8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'Unlocking the Secrets of DNA',
					date: 'August 18, 2024',
					author: 'Sophia Moore',
					readDuration: '6 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2014/04/03/11/05/model-311815_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'The Power of the Human Brain',
					date: 'August 11, 2024',
					author: 'Daniel Taylor',
					readDuration: '5 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg'
				},
				{
					image:
						'https://images.unsplash.com/photo-1606147505850-d3c20871c3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'Exploring the Vastness of Space',
					date: 'August 4, 2024',
					author: 'Olivia Anderson',
					readDuration: '7 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png'
				}
			]
		},
		{
			title: 'History',
			image_url:
				'https://media.gettyimages.com/id/157294324/photo/unexplored.jpg?s=612x612&w=gi&k=20&c=fBfV45wM_cVJ64Gfu028BRJsv3wadueZoxzcrPUYh0w=',
			posts: [
				{
					image:
						'https://images.unsplash.com/photo-1575517111467-71d9a0d33364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'Ancient Egypt: A Journey Through Time',
					date: 'July 29, 2024',
					author: 'Emily Davis',
					readDuration: '7 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2020/12/02/12/13/woman-5791226_1280.jpg'
				},
				{
					image:
						'https://images.unsplash.com/photo-1528659709592-8aca5e1733c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'The Rise and Fall of the Roman Empire',
					date: 'July 22, 2024',
					author: 'Noah Wilson',
					readDuration: '9 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1618598213429-a69581e3873d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'The Legacy of Ancient Greece',
					date: 'July 15, 2024',
					author: 'Isabella Garcia',
					readDuration: '6 min read',
					authorAvatar:
						'https://cdn.pixabay.com/photo/2016/09/01/08/25/businessman-1635450_1280.png'
				},
				{
					image:
						'https://images.unsplash.com/photo-1556910145-24e48d5e5263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					title: 'Medieval Castles: Strongholds of Power',
					date: 'July 8, 2024',
					author: 'Logan Martinez',
					readDuration: '8 min read',
					authorAvatar: 'https://cdn.pixabay.com/photo/2021/01/16/09/09/woman-5923394_1280.jpg'
				}
			]
		},
		{
			title: 'Business',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOFiS4qcEbgWz-QXUkzeKhHLaXw0WZXfGzg&s',
			posts: []
		},
		{
			title: 'Health',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5nYnWsQ1jbxK0R3Bb3BOMASXXSQ4E2OpnQ&s',
			posts: []
		},
		{
			title: 'Art & Culture',
			image_url:
				'https://www.shutterstock.com/image-vector/multicultural-character-on-planet-earth-600nw-182537297.jpg',
			posts: []
		}
	];

	// onMount(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// });
	let y: number;
	onMount(() => {
		// Initialize y to window.scrollY
		y = window.scrollY;

		const handleScroll = () => {
			y = window.scrollY;
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const scrollToSection = () => {
		scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	};
</script>

<div class=" ">
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
		<button class="bounce my-5 flex justify-center" on:click={scrollToSection}>
			<Icon icon="solar:alt-arrow-down-line-duotone" font-size={30} />
		</button>
	</div>

	<!-- Categories -->
	<div class="mb-10 flex flex-col px-28">
		<div class=" mb-5 flex flex-row items-center justify-between">
			<span class=" font-bold">Browse The Categories</span>
			<button class=" flex flex-row items-center font-semibold">
				<NavBarButton title="See All Categories" />
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

	<div class=" flex flex-col bg-white px-28 py-5">
		{#each categories as category}
			<CategorySection {category} />
		{/each}
	</div>
	<div class=" flex flex-col items-center justify-center py-10">
		<div class=" mb-5 flex flex-col items-center justify-center">
			<img src="/icons/mail.png" alt="" width="130" height="130" />
			<div class=" my-3 flex flex-col items-center justify-center">
				<span class=" mb-1 text-2xl font-bold">Subscribe For the lastest updates</span>
				<span class=" text-sm text-gray-400"
					>Subscribe to newsletter and never miss the new post every week.</span
				>
			</div>
		</div>

		<div class=" flex h-10 flex-1 flex-row items-center justify-center gap-3">
			<label class="input flex h-10 gap-2">
				<input type="text" class="" placeholder="Enter your email here..." />
			</label>
			<button
				class=" bg-secondary hover:bg-primary rounded-md px-5 py-2 text-white transition-all duration-100"
				>Subscribe</button
			>
		</div>
	</div>
	<Footer />
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
