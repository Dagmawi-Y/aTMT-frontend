export const getCategories = async () => {
	const baseURL = 'http://localhost:3334';

	try {
		const response = await fetch(`${baseURL}/categories`);
		if (!response.ok) {
			throw new Error('Failed to fetch categories');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw error;
	}
};
