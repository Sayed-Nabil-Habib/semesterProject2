export function createPostFormToggle() {
    const toggleButton = document.getElementById("toggleForm");
    const form = document.getElementById("createPostForm");

    toggleButton.addEventListener("click", function () {
        if (form.classList.contains("hidden")) {
            showForm();
        } else {
            hideForm();
        }
    });
}

function showForm() {
    const form = document.getElementById("createPostForm");
    const toggleButton = document.getElementById("toggleForm");

    form.classList.remove("hidden");
    toggleButton.textContent = "Hide Form";
}

function hideForm() {
    const form = document.getElementById("createPostForm");
    const toggleButton = document.getElementById("toggleForm");

    form.classList.add("hidden");
    toggleButton.textContent = "Show Form";
}
