
let url = "https://dummyjson.com/recipes?limit=6";

let recipesContainer = document.querySelector("#recipesContainer");
let message = document.querySelector("#message");
let recipeDetails = document.querySelector("#recipeDetails");

// GET recipes from API
async function getRecipes() {

    try {

        message.innerText = "Loading recipes...";

        let response = await fetch(url);

        // Display HTTP status code
        console.log("Status Code:", response.status);

        // Check response
        if (!response.ok) {
            throw new Error("Failed to load recipes");
        }

        // Convert response into JSON
        let data = await response.json();

        // Get recipes array
        let recipes = data.recipes;

        // Display recipes
        showRecipes(recipes);

        message.innerText = "Recipes loaded successfully!";

    } catch (error) {

        message.innerText = "Sorry! Recipes could not be loaded.";

        console.log("Error:", error.message);
    }
}


// Display recipes in cards
function showRecipes(recipes) {

    recipesContainer.innerHTML = "";

    recipes.forEach(function(recipe) {

        recipesContainer.innerHTML += `
            <div class="recipe-card">

                <img src="${recipe.image}" alt="${recipe.name}">

                <div class="recipe-info">

                    <h3>${recipe.name}</h3>

                    <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>

                    <p><strong>Preparation:</strong> ${recipe.prepTimeMinutes} minutes</p>

                    <button onclick="showDetails(${recipe.id})">
                        View Ingredients
                    </button>

                </div>

            </div>
        `;

    });

}


// Show ingredients of selected recipe
async function showDetails(id) {

    try {

        let response = await fetch("https://dummyjson.com/recipes/" + id);

        if (!response.ok) {
            throw new Error("Recipe details not found");
        }

        let recipe = await response.json();

        let ingredientsList = "";

        recipe.ingredients.forEach(function(ingredient) {

            ingredientsList += `<li>${ingredient}</li>`;

        });

        recipeDetails.style.display = "block";

        recipeDetails.innerHTML = `
            <h2>${recipe.name}</h2>

            <h3>Ingredients:</h3>

            <ul>
                ${ingredientsList}
            </ul>
        `;

        // Scroll to ingredients
        recipeDetails.scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {

        recipeDetails.style.display = "block";

        recipeDetails.innerHTML = "Sorry! Ingredients could not be loaded.";

        console.log(error.message);
    }

}


// Call function
getRecipes();
