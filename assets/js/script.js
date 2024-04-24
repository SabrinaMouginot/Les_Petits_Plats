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
}

// // charger les recettes et initialiser l'application lorsque le DOM est prêt
// document.addEventListener('DOMContentLoaded', function () {
//     const searchBar = document.querySelector('#searchBar');
//     searchBar.addEventListener('input', filterRecipes);

//     RecipeFactory.loadRecipes()
//         .then(recipes => {
//             allRecipes = recipes;

//             RecipeFactory.renderRecipes(recipes);
//             generateIngredientDropdown(recipes);
//             generateApplianceDropdown(recipes);
//             generateUstensilDropdown(recipes);

//         })
//         .catch(error => console.error('Erreur de chargement des données :', error));
// });

// function filterRecipes(e) {
//     console.log(e);
// }

// filtrer les recettes en fonction du texte de recherche saisi 
function filterRecipes(searchText) {
    // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
    const searchTextLowerCase = searchText.toLowerCase();

    // Filtrer les recettes en fonction du texte de recherche
    const filteredRecipes = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTextLowerCase) ||
        recipe.description.toLowerCase().includes(searchTextLowerCase) ||
        recipe.ingredients.some(ingredient =>
            ingredient.ingredient.toLowerCase().includes(searchTextLowerCase)
        )
    );

    // Effacer le contenu actuel des recettes affichées
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    // Afficher les recettes filtrées
    RecipeFactory.renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('#searchBar');
    searchBar.addEventListener('input', function (event) {
        filterRecipes(event.target.value);
    });

    // Chargez les recettes et affichez-les initialement
    RecipeFactory.loadRecipes()
        .then(recipes => {
            allRecipes = recipes;

            RecipeFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});


export { tags };