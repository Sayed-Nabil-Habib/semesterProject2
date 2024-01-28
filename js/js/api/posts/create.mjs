// create.mjs
import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";

export async function createPost(postData) {
    const token = load("accessToken");
    const createPostUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await fetch(createPostUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to create post:', response.status, response.statusText, errorData);
            throw new Error(`Failed to create post: ${response.status}`);
        }

        const post = await response.json();
        console.log('Created post:', post);
        return post;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}
