import { createBid } from "../../api/posts/create.mjs";
import { isLoggedIn } from "../buttons/userLoggedIn.mjs";

export async function createBidFormListener() {
    const form = document.querySelector("#addBidForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const bidInput = form.querySelector('.bidSearch');
            const bidValue = bidInput.value.trim();

            if (!bidValue) {
                console.log("Bid value cannot be empty");
                // Optionally, display an error message to the user.
                return;
            }

            const addBid = {
                amount: Number(bidValue),
            };

            const response = await createBid(addBid);
            // console.log("Bid added successfully:", response);
            window.location.replace("/listing/product/index.html");
        } catch (error) {
            console.error("Error creating bid:", error);
            // Handle specific error cases and provide feedback to the user
        }
    });
}
