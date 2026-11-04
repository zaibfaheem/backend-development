
let url = "https://jsonplaceholder.typicode.com/posts";

let form = document.querySelector("#postForm");
let title = document.querySelector("#postTitle");
let userId = document.querySelector("#userId");
let body = document.querySelector("#postBody");
let postsContainer = document.querySelector("#postsContainer");
let reloadBtn = document.querySelector("#reloadBtn");
let message = document.querySelector("#message");

let posts = [];

// 1. GET: Posts load karna
async function getPosts() {
    message.innerText = "Loading posts...";

    try {
        let response = await fetch(url + "?_limit=6");

        console.log("GET Status:", response.status);

        if (!response.ok) {
            throw new Error("Posts load nahi huay");
        }

        posts = await response.json();

        showPosts();

        message.innerText = "Posts loaded successfully!";
    } catch (error) {
        message.innerText = error.message;
    }
}

// 2. Posts ko page par show karna
function showPosts() {
    postsContainer.innerHTML = "";

    posts.forEach(function(post) {
        postsContainer.innerHTML += `
            <div class="post-card">
                <p>Post ID: ${post.id}</p>
                <p>User ID: ${post.userId}</p>
                <h3>${post.title}</h3>
                <p>${post.body}</p>

                <input id="title${post.id}"
                    value="${post.title.replace(/"/g, "&quot;")}"
                    placeholder="New title">

                <textarea id="body${post.id}"
                    placeholder="New body">${post.body}</textarea>

                <input id="user${post.id}"
                    type="number" min="1" value="${post.userId}">

                <button onclick="putPost(${post.id})">
                    PUT: Update All
                </button>

                <button onclick="patchTitle(${post.id})">
                    PATCH: Title
                </button>

                <button onclick="patchBody(${post.id})">
                    PATCH: Body
                </button>

                <button onclick="deletePost(${post.id})">
                    DELETE
                </button>
            </div>
        `;
    });
}

// 3. POST: Naya post add karna
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    let newPost = {
        title: title.value,
        userId: Number(userId.value),
        body: body.value
    };

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        console.log("POST Status:", response.status);

        if (!response.ok) {
            throw new Error("Post add nahi hua");
        }

        let data = await response.json();

        // Local page par post add karna
        newPost.id = data.id;
        posts.unshift(newPost);

        showPosts();
        form.reset();

        message.innerText = "Post added successfully!";
    } catch (error) {
        message.innerText = error.message;
    }
});

// 4. PUT: Poora post update karna
async function putPost(id) {
    let newTitle = document.querySelector("#title" + id).value;
    let newBody = document.querySelector("#body" + id).value;
    let newUser = Number(document.querySelector("#user" + id).value);

    let updatedPost = {
        id: id,
        title: newTitle,
        userId: newUser,
        body: newBody
    };

    try {
        let response = await fetch(url + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });

        console.log("PUT Status:", response.status);

        if (!response.ok) {
            throw new Error("Post update nahi hua");
        }

        posts = posts.map(function(post) {
            if (post.id === id) {
                return updatedPost;
            }

            return post;
        });

        showPosts();
        message.innerText = "Poora post update ho gaya!";
    } catch (error) {
        message.innerText = error.message;
    }
}

// 5. PATCH: Sirf title update karna
async function patchTitle(id) {
    let newTitle = document.querySelector("#title" + id).value;

    try {
        let response = await fetch(url + "/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle
            })
        });

        console.log("PATCH Title Status:", response.status);

        if (!response.ok) {
            throw new Error("Title update nahi hua");
        }

        posts = posts.map(function(post) {
            if (post.id === id) {
                return {
                    ...post,
                    title: newTitle
                };
            }

            return post;
        });

        showPosts();
        message.innerText = "Title update ho gaya!";
    } catch (error) {
        message.innerText = error.message;
    }
}

// 6. PATCH: Sirf body update karna
async function patchBody(id) {
    let newBody = document.querySelector("#body" + id).value;

    try {
        let response = await fetch(url + "/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: newBody
            })
        });

        console.log("PATCH Body Status:", response.status);

        if (!response.ok) {
            throw new Error("Body update nahi hui");
        }

        posts = posts.map(function(post) {
            if (post.id === id) {
                return {
                    ...post,
                    body: newBody
                };
            }

            return post;
        });

        showPosts();
        message.innerText = "Post content update ho gaya!";
    } catch (error) {
        message.innerText = error.message;
    }
}

// 7. DELETE: Post delete karna
async function deletePost(id) {
    try {
        let response = await fetch(url + "/" + id, {
            method: "DELETE"
        });

        console.log("DELETE Status:", response.status);

        if (!response.ok) {
            throw new Error("Post delete nahi hua");
        }

        posts = posts.filter(function(post) {
            return post.id !== id;
        });

        showPosts();
        message.innerText = "Post delete ho gaya!";
    } catch (error) {
        message.innerText = error.message;
    }
}

// Reload button
reloadBtn.addEventListener("click", getPosts);

// Page load hote hi GET request
getPosts();

