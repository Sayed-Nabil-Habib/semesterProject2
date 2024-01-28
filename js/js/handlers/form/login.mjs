import { login } from "../../api/auth/login.mjs";

export function loginFormListener() {
    const form = document.querySelector('#loginForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            try {
                const formData = new FormData(form);
                const profile = Object.fromEntries(formData);

                const loginResponse = await login(profile);

                if (loginResponse.success) {
                    window.location.href = '/Profile/Profile/index.html';
                } else {
                    console.log('Login failed:', loginResponse.message);
                    // Optionally, display an error message on the login form.
                }
            } catch (error) {
                console.error('Error during login:', error);
                // Handle the error, display a message to the user, or redirect to an error page.
            }
        });
    }
}
