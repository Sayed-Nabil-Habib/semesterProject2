import { login } from "../../api/auth/login.mjs";

export function loginFormListener() {
    const form = document.querySelector('#loginForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData);

            try {
               
                const loginResponse = await login(profile);

                
                if (loginResponse.success) {
                 
                    window.location.href = '//Profile/Profile/index.html'; 
                } else {
                   
                    console.log('Login failed:', loginResponse.message);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        });
    }
}
