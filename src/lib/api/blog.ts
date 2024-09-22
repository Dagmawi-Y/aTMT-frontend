import { API_CONFIG } from './config';

const { generateBaseURL, manageBaseURL, defaultHeaders } = API_CONFIG;

export async function generateAIBlog(category: string, prompt: string) {
	const response = await fetch(`${generateBaseURL}/blog-generator/generate`, {
		method: 'GET',
		headers: defaultHeaders,
		body: JSON.stringify({ category, prompt })
	});

	if (!response.ok) {
		throw new Error(`Error generating AI blog: ${response.status}`);
	}
	return await response.json();
}

export async function createBlog(blogData: {
	title: string;
	image: string;
	category: string;
	subCategory: string;
	content: string;
}) {
	const response = await fetch(`${manageBaseURL}/`, {
		method: 'POST',
		headers: defaultHeaders,
		body: JSON.stringify(blogData)
	});

	if (!response.ok) {
		throw new Error(`Error creating blog: ${response.status}`);
	}
	return await response.json();
}

export async function getAllBlogs(page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'asc') {
	const response = await fetch(
		`${manageBaseURL}/?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
		{
			method: 'GET',
			headers: defaultHeaders
		}
	);

	if (!response.ok) {
		throw new Error(`Error fetching blogs: ${response.status}`);
	}
	return await response.json();
}

export async function getBlogById(id: string) {
	const response = await fetch(`${manageBaseURL}/${id}`, {
		method: 'GET',
		headers: defaultHeaders
	});

	if (!response.ok) {
		throw new Error(`Error fetching blog by ID: ${response.status}`);
	}
	return await response.json();
}

export async function updateBlog(id: string, blogData: { title?: string; content?: string }) {
	const response = await fetch(`${manageBaseURL}/${id}`, {
		method: 'PUT',
		headers: defaultHeaders,
		body: JSON.stringify(blogData)
	});

	if (!response.ok) {
		throw new Error(`Error updating blog: ${response.status}`);
	}
	return await response.json();
}

export async function deleteBlog(id: string) {
	const response = await fetch(`${manageBaseURL}/${id}`, {
		method: 'DELETE',
		headers: defaultHeaders
	});

	if (!response.ok) {
		throw new Error(`Error deleting blog: ${response.status}`);
	}
	return await response.json();
}

export async function getBlogsByCategory(
	category: string,
	limit = 10,
	sortBy = 'createdAt',
	sortOrder = 'desc'
) {
	const response = await fetch(
		`${manageBaseURL}/category/${category}?limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
		{
			method: 'GET',
			headers: defaultHeaders
		}
	);

	if (!response.ok) {
		throw new Error(`Error fetching blogs by category: ${response.status}`);
	}
	return await response.json();
}

export async function getBlogsBySubCategory(
	subcategory: string,
	limit = 10,
	sortBy = 'createdAt',
	sortOrder = 'desc'
) {
	const response = await fetch(
		`${manageBaseURL}/subcategory/${subcategory}?limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
		{
			method: 'GET',
			headers: defaultHeaders
		}
	);

	if (!response.ok) {
		throw new Error(`Error fetching blogs by subcategory: ${response.status}`);
	}
	return await response.json();
}

export async function searchBlogs(
	query: string,
	page = 1,
	limit = 10,
	sortBy = 'createdAt',
	sortOrder = 'desc'
) {
	const response = await fetch(
		`${manageBaseURL}/search?q=${query}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
		{
			method: 'GET',
			headers: defaultHeaders
		}
	);

	if (!response.ok) {
		throw new Error(`Error searching blogs: ${response.status}`);
	}
	return await response.json();
}
