import type { PageServerLoad } from './$types';
import { getCategories } from '$lib/api';
import { getBlogsByCategory } from '$lib/api';

export const load: PageServerLoad = (async () => {
	try {
		const categories = await getCategories();
		return {
			props: {
				categories
			}
		};
	} catch (error) {
		console.error('Failed to fetch categories:', error);
		return {
			props: {
				categories: []
			}
		};
	}
}) satisfies PageServerLoad;
