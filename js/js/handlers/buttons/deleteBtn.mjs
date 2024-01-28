import { removePost } from "../../api/posts/delete.mjs";

export async function handleDeleteButtonClick(postData) {
    const confirmation = window.confirm("Are you sure you want to delete this post?");

    try {
        if (confirmation) {
            const postId = postData.id;
            const deletedPost = await removePost(postId);
            window.location.reload();
        } else {
            console.log("Post deletion cancelled.");
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        window.location.reload();
    }
}
