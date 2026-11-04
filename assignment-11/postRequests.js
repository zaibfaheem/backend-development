
let url = "https://jsonplaceholder.typicode.com/posts";

let form = document.querySelector("#postForm");
let result = document.querySelector("#result");

let title = document.querySelector("#title");
let content = document.querySelector("#content");
let userId = document.querySelector("#userId");

let putBtn = document.querySelector("#putBtn");
let patchBtn = document.querySelector("#patchBtn");
let deleteBtn = document.querySelector("#deleteBtn");


// Reusable Request Function
async function sendRequest(url, method, body = null) {

    try {

        let options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        // JSON.stringify converts a JavaScript object into JSON text.
        // Content-Type tells the server that we are sending JSON data.

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        let response = await fetch(url, options);

        let data = null;

        if (method !== "DELETE") {
            data = await response.json();
        }

        result.textContent =
            "Status Code: " + response.status +
            "\n\nResponse:\n" + JSON.stringify(data, null, 2);

        console.log("Status:", response.status);
        console.log("Response:", data);

    } catch (error) {

        result.textContent = "Error: " + error.message;
        console.log(error);

    }
}


// POST REQUEST
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    let postData = {
        title: title.value,
        body: content.value,
        userId: Number(userId.value)
    };

    await sendRequest(url, "POST", postData);

});


// PUT REQUEST
putBtn.addEventListener("click", async function() {

    let postData = {
        id: 1,
        title: "Updated Announcement",
        body: "This is the complete updated announcement.",
        userId: 1
    };

    await sendRequest(url + "/1", "PUT", postData);

});


// PATCH REQUEST
patchBtn.addEventListener("click", async function() {

    let postData = {
        title: "Only Title Updated"
    };

    await sendRequest(url + "/1", "PATCH", postData);

});


// DELETE REQUEST
deleteBtn.addEventListener("click", async function() {

    await sendRequest(url + "/1", "DELETE");

});
