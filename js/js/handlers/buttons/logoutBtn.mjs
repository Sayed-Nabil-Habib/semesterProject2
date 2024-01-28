export function createLogoutButton() {
    const logoutButton = document.createElement('a');
    logoutButton.href = "#";
    logoutButton.className = "btn btn-danger my-2 my-sm-0 ms-2";
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout";

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            localStorage.clear();
            window.location.replace("/profile/login/index.html");
        } else {
            console.log("Logout canceled");
        }
    };

    logoutButton.addEventListener("click", handleLogout);

    return logoutButton;
}
