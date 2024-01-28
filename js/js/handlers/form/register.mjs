import { register } from "../../api/auth/register.mjs";

export function registerFormListener() {
    const form = document.querySelector('#registerForm');

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData);
            console.log(profile);

            await register(profile);
            // Optionally, you can add a success message or redirect to another page.
        } catch (error) {
            console.error("Error registering:", error);
            // Handle the error, display a message to the user, or redirect to an error page.
        }
    });
}
