import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";

export async function removePost(id) {
    const removePostUrl = `${API_BASE_URL}${action}/${id}`;
    const token = load("accessToken");

    try {
        const response = await fetch(removePostUrl, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to remove post. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error removing post:", error);
        throw error;
    }
}
