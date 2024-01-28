import { createPost } from "../../api/posts/create.mjs";

export async function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    const imageList = document.getElementById("imageList");
    const tagsList = document.getElementById("tagsList");

    const mediaInputs = document.querySelectorAll('input[name="media"]');
    const tagInputs = document.querySelectorAll('input[name="tags"]');

    form.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-media")) {
            const inputGroup = createInputGroup("media", "url");
            form.appendChild(inputGroup);
        }
        if (event.target.classList.contains("add-tags")) {
            const inputGroup = createInputGroup("tags", "text");
            form.appendChild(inputGroup);
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        const title = document.querySelector('#title').value;
        const endsAt = document.querySelector('#endsAt').value;
        const body = document.querySelector('#body').value;

        const media = getValues('input[name="media"]');
        const tags = getValues('input[name="tags"]');

        const post = {
            title,
            endsAt,
            body,
            tags,
            media,
        };

        try {
            const response = await createPost(post);
            window.location.reload();
        } catch (error) {
            console.log("Error creating post:", error);
        }
    });
}

function createInputGroup(name, type) {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "my-2");

    const input = document.createElement("input");
    input.name = name;
    input.type = type;
    input.classList.add("form-control");
    inputGroup.appendChild(input);

    const clearButton = document.createElement("button");
    clearButton.innerHTML = "&times;";
    clearButton.classList.add("btn", "btn-light", "btn-clear");
    clearButton.type = "button";
    clearButton.addEventListener("click", () => {
        input.value = "";
    });
    inputGroup.appendChild(clearButton);

    return inputGroup;
}

function getValues(selector) {
    return Array.from(document.querySelectorAll(selector))
        .map((input) => input.value)
        .filter((value) => value !== '');
}
