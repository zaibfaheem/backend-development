
let url = "https://dummyjson.com/products";

let productsContainer = document.querySelector("#productsContainer");
let message = document.querySelector("#message");

// GET request
fetch(url)

    .then(function(response) {

        console.log("Status Code:", response.status);

        if (!response.ok) {
            throw new Error("Products could not be loaded!");
        }

        return response.json();
    })

    .then(function(data) {

        let products = data.products;

        console.log("First Product Brand:", products[0].brand);

        message.innerText = "";

        // Display only first 6 products
        products.slice(0, 6).forEach(function(product) {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">

                <h3>${product.title}</h3>

                <p>Brand: ${product.brand || "Not available"}</p>

                <p class="price">Price: $${product.price}</p>
            `;

            productsContainer.appendChild(card);

        });

    })

    .catch(function(error) {

        message.innerText = "Something went wrong! " + error.message;

        console.log(error);

    });
