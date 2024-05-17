// import RecipeFactory from './recipeFactory.js';
// import { generateIngredientDropdown } from './filters/ingredientFilter.js';
// import { generateApplianceDropdown } from './filters/applianceFilter.js';
// import { generateUstensilDropdown } from './filters/ustensilFilter.js';


// const tags = [];
// let allRecipes; // Déclarer la variable globale allRecipes

// // afficher les filtres sélectionnés
// export function displayTags() {
//     // Sélectionne les conteneurs pour chaque type de tag
//     const ingredientContainer = document.querySelector('.selected-ingredient');
//     const applianceContainer = document.querySelector('.selected-appliance');
//     const ustensilContainer = document.querySelector('.selected-ustensil');

//     // Vide les conteneurs précédents
//     ingredientContainer.innerHTML = '';
//     applianceContainer.innerHTML = '';
//     ustensilContainer.innerHTML = '';

//     // Parcours les tags pour chaque type et les ajoute aux conteneurs correspondants
//     tags.forEach(tag => {
//         const tagButton = document.createElement('button');
//         tagButton.classList.add('btn', 'btn-tag', `btn-${tag.type}`);
//         tagButton.textContent = tag.value;

//         // Ajoute le tag au conteneur correspondant en fonction de son type
//         if (tag.type === 'ingredient') {
//             ingredientContainer.appendChild(tagButton);
//         } else if (tag.type === 'appliance') {
//             applianceContainer.appendChild(tagButton);
//         } else if (tag.type === 'ustensil') {
//             ustensilContainer.appendChild(tagButton);
//         }
//     });

//     // Filtrer et afficher les recettes à chaque changement de tag
//     filterRecipes(document.querySelector('#searchBar').value);
// }

//  // Fonction pour filtrer les recettes en fonction des tags sélectionnés
// function filterRecipesByTags(recipes) {
//     // Si aucun tag n'est sélectionné, retournez toutes les recettes
//     if (tags.length === 0) {
//         return recipes;
//     }

//     // Filtrer les recettes en fonction des tags sélectionnés
//     return recipes.filter(recipe => {
//         // Vérifiez si tous les tags sont présents dans la recette
//         return tags.every(tag => {
//             if (tag.type === 'ingredient') {
//                 return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === tag.value.toLowerCase());
//             } else if (tag.type === 'appliance') {
//                 return recipe.appliance.toLowerCase() === tag.value.toLowerCase();
//             } else if (tag.type === 'ustensil') {
//                 return recipe.ustensils.some(ustensil => ustensil.toLowerCase() === tag.value.toLowerCase());
//             }
//         });
//     });
// }


// // filtrer les recettes en fonction du texte de recherche saisi 
// function filterRecipes(searchText) {
//     // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
//     const searchTextLowerCase = searchText.toLowerCase();

//     // Filtrer les recettes en fonction du texte de recherche
//     let filteredRecipes = allRecipes.filter(recipe =>
//         recipe.name.toLowerCase().includes(searchTextLowerCase) ||
//         recipe.description.toLowerCase().includes(searchTextLowerCase) ||
//         recipe.ingredients.some(ingredient =>
//             ingredient.ingredient.toLowerCase().includes(searchTextLowerCase)
//         )
//     );

//     // Filtrer les recettes en fonction des tags sélectionnés
//     filteredRecipes = filterRecipesByTags(filteredRecipes);

//     // Effacer le contenu actuel des recettes affichées
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';

//     // Afficher les recettes filtrées
//     RecipeFactory.renderRecipes(filteredRecipes);
//     displayRecipesNumber(filteredRecipes.length);
//     generateIngredientDropdown(filteredRecipes);
//     generateApplianceDropdown(filteredRecipes);
//     generateUstensilDropdown(filteredRecipes);
// }

// function displayRecipesNumber (length) {
//         // Sélectionner l'élément où afficher le nombre total de recettes
//         const totalRecipesElement = document.getElementById('totalRecipesCount');

//         // Afficher le nombre total de recettes dans l'élément
//         totalRecipesElement.textContent = `${length} recette(s)`;
// }

// document.addEventListener('DOMContentLoaded', async function() {
//     try {
//         const response = await fetch('assets/json/recipes.json');
//         const recipesData = await response.json();


//         // Charger les recettes et afficher initialement
//         allRecipes = recipesData;
//         RecipeFactory.renderRecipes(allRecipes);
//         displayRecipesNumber(allRecipes.length);
//         generateIngredientDropdown(allRecipes);
//         generateApplianceDropdown(allRecipes);
//         generateUstensilDropdown(allRecipes);
//     } catch (error) {
//         console.error('Erreur lors du chargement des recettes :', error);
//     }


//     const searchBar = document.querySelector('#searchBar');
//     const searchButton = document.querySelector('.loupe button'); // Sélectionnez le bouton de la loupe

//     let searchText = ''; // Variable pour stocker le texte de recherche

//     // Ajouter un écouteur d'événements pour le clic sur le bouton de la loupe
//     searchButton.addEventListener('click', function (event) {
//         event.preventDefault(); // Empêcher le comportement par défaut du formulaire

//         if (searchText !== '') { // Vérifiez si la barre de recherche n'est pas vide
//             filterRecipes(searchText); // Filtrez les recettes avec le texte de recherche
//         } else {
//             // Si la barre de recherche est vide, réinitialisez l'affichage
//             RecipeFactory.renderRecipes(allRecipes); // Affichez toutes les recettes
//             displayRecipesNumber(allRecipes.length);
//         }
//     });

//     // Charger les recettes et affichez-les initialement
//     RecipeFactory.loadRecipes()
//         .then(recipes => {
//             allRecipes = recipes;
//             RecipeFactory.renderRecipes(recipes);
//             displayRecipesNumber(recipes.length);
//             generateIngredientDropdown(recipes);
//             generateApplianceDropdown(recipes);
//             generateUstensilDropdown(recipes);
//         })
//         .catch(error => console.error('Erreur de chargement des données :', error));

//     // Ajoutez un écouteur d'événements pour le changement de texte dans la barre de recherche
//     searchBar.addEventListener('input', function (event) {
//         searchText = event.target.value.trim(); // Mettez à jour le texte de recherche
//         filterRecipes(searchText); // Filtrez les recettes avec le texte de recherche
//     });
// });

// export { tags };

import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';

const tags = [];
let allRecipes; // Déclarer la variable globale allRecipes

// afficher les filtres sélectionnés
export function displayTags() {
    // Sélectionne les conteneurs pour chaque type de tag
    const ingredientContainer = document.querySelector('.selected-ingredient');
    const applianceContainer = document.querySelector('.selected-appliance');
    const ustensilContainer = document.querySelector('.selected-ustensil');

    // Vide les conteneurs précédents
    ingredientContainer.innerHTML = '';
    applianceContainer.innerHTML = '';
    ustensilContainer.innerHTML = '';

    // Parcours les tags pour chaque type et les ajoute aux conteneurs correspondants
    tags.forEach(tag => {
        const tagButton = document.createElement('button');
        tagButton.classList.add('btn', 'btn-tag', `btn-${tag.type}`);
        tagButton.textContent = tag.value;

        // Ajoute le tag au conteneur correspondant en fonction de son type
        if (tag.type === 'ingredient') {
            ingredientContainer.appendChild(tagButton);
        } else if (tag.type === 'appliance') {
            applianceContainer.appendChild(tagButton);
        } else if (tag.type === 'ustensil') {
            ustensilContainer.appendChild(tagButton);
        }
    });

    // Filtrer et afficher les recettes à chaque changement de tag
    filterRecipes(document.querySelector('#searchBar').value);
}

// Fonction pour filtrer les recettes en fonction des tags sélectionnés
function filterRecipesByTags(recipes) {
    // Si aucun tag n'est sélectionné, retournez toutes les recettes
    if (tags.length === 0) {
        return recipes;
    }

    // Filtrer les recettes en fonction des tags sélectionnés
    return recipes.filter(recipe => {
        // Vérifiez si tous les tags sont présents dans la recette
        return tags.every(tag => {
            if (tag.type === 'ingredient') {
                return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === tag.value.toLowerCase());
            } else if (tag.type === 'appliance') {
                return recipe.appliance.toLowerCase() === tag.value.toLowerCase();
            } else if (tag.type === 'ustensil') {
                return recipe.ustensils.some(ustensil => ustensil.toLowerCase() === tag.value.toLowerCase());
            }
        });
    });
}

// filtrer les recettes en fonction du texte de recherche saisi 
function filterRecipes(searchText) {
    // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
    const searchTextLowerCase = searchText.toLowerCase();

    // Filtrer les recettes en fonction du texte de recherche
    let filteredRecipes = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTextLowerCase) ||
        recipe.description.toLowerCase().includes(searchTextLowerCase) ||
        recipe.ingredients.some(ingredient =>
            ingredient.ingredient.toLowerCase().includes(searchTextLowerCase)
        )
    );

    // Filtrer les recettes en fonction des tags sélectionnés
    filteredRecipes = filterRecipesByTags(filteredRecipes);

    // Effacer le contenu actuel des recettes affichées
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    // Afficher les recettes filtrées
    RecipeFactory.renderRecipes(filteredRecipes);
    displayRecipesNumber(filteredRecipes.length);
    generateIngredientDropdown(filteredRecipes);
    generateApplianceDropdown(filteredRecipes);
    generateUstensilDropdown(filteredRecipes);
}

function displayRecipesNumber (length) {
    // Sélectionner l'élément où afficher le nombre total de recettes
    const totalRecipesElement = document.getElementById('totalRecipesCount');

    // Afficher le nombre total de recettes dans l'élément
    totalRecipesElement.textContent = `${length} recette(s)`;
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Charger les recettes et afficher initialement
        const recipes = await RecipeFactory.loadRecipes();
        allRecipes = recipes;
        RecipeFactory.renderRecipes(allRecipes);
        displayRecipesNumber(allRecipes.length);
        generateIngredientDropdown(allRecipes);
        generateApplianceDropdown(allRecipes);
        generateUstensilDropdown(allRecipes);
    } catch (error) {
        console.error('Erreur lors du chargement des recettes :', error);
    }

    const searchBar = document.querySelector('#searchBar');
    const searchButton = document.querySelector('.loupe button');

    let searchText = '';

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        filterRecipes(searchText);
    });

    searchBar.addEventListener('input', function (event) {
        searchText = event.target.value.trim();
        filterRecipes(searchText);
    });
});

export { tags };
