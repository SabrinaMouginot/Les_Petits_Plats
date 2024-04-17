// import RecipeFactory from './recipeFactory.js';
// import { generateIngredientDropdown } from './filters/ingredientFilter.js';
// import { generateApplianceDropdown } from './filters/applianceFilter.js';
// import { generateUstensilDropdown } from './filters/ustensilFilter.js';

// const tags = []

// let allRecipes; // Déclarer la variable globale allRecipes
// document.addEventListener('DOMContentLoaded', function () {
//     RecipeFactory.loadRecipes()
//         .then(recipes => {
//             allRecipes = recipes;

//             RecipeFactory.renderRecipes(recipes);
//             generateIngredientDropdown(recipes);
//             generateApplianceDropdown(recipes);
//             generateUstensilDropdown(recipes);

//             const ingredientsButton = document.querySelector('.btn-ingredients');
//             const appliancesButton = document.querySelector('.btn-appliance');
//             const ustensilsButton = document.querySelector('.btn-ustensils');
//             const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
//             const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
//             const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');

//             recipes.forEach(recipe => {
//                 recipe.ingredients.forEach(ingredientObject => {
//                     const ingredientName = ingredientObject.ingredient;
//                     // Faites quelque chose avec le nom de l'ingrédient ici
//                 });
//             });


//             // Gestion des événements pour le bouton Ingrédients et sa flèche
//             ingredientsButton.addEventListener('click', toggleIngredientDropdown);
//             ingredientsButton.querySelector('.dropdown-arrow').addEventListener('click', toggleIngredientDropdown);

//             // Gestion des événements pour le bouton Appareils
//             appliancesButton.addEventListener('click', toggleDropdown(appliancesDropdown));

//             // Gestion des événements pour le bouton Ustensiles
//             ustensilsButton.addEventListener('click', toggleDropdown(ustensilsDropdown));

//             function toggleIngredientDropdown() {
//                 closeDropdowns(appliancesDropdown, ustensilsDropdown);
//                 ingredientsDropdown.classList.toggle('show');
//             }

//             function toggleDropdown(dropdown) {
//                 return function () {
//                     closeDropdowns(ingredientsDropdown, dropdown === appliancesDropdown ? ustensilsDropdown : appliancesDropdown);
//                     dropdown.classList.toggle('show');
//                 };
//             }

//             function closeDropdowns(...dropdowns) {
//                 dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
//             }

//             export function displayTags() {
//                 const tagsContainer = document.querySelector('.tags-container');
//                 tagsContainer.innerHTML = ''; // Efface les tags précédents

//                 tags.forEach(tag => {
//                     const tagButton = document.createElement('button'); // Crée un élément bouton
//                     tagButton.classList.add('btn', 'btn-tag'); // Ajoute les classes Bootstrap pour styliser le bouton
//                     tagButton.classList.add(`btn-${tag.type}`); // Ajoute une classe spécifique au type de tag
//                     tagButton.textContent = tag.value; // Définit le texte du bouton
//                     tagsContainer.appendChild(tagButton); // Ajoute le bouton au conteneur
//                 });
//             }



//         })
//         .catch(error => console.error('Erreur de chargement des données :', error));
// });

// export { tags };

import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';

const tags = [];

let allRecipes; // Déclarer la variable globale allRecipes

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


document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            allRecipes = recipes;

            RecipeFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

            const ingredientsButton = document.querySelector('.btn-ingredients');
            const appliancesButton = document.querySelector('.btn-appliances');
            const ustensilsButton = document.querySelector('.btn-ustensils');
            const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
            const appliancesDropdown = document.querySelector('.btn-appliances .dropdown-menu');
            const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');

            recipes.forEach(recipe => {
                recipe.ingredients.forEach(ingredientObject => {
                    const ingredientName = ingredientObject.ingredient;
                    // Faites quelque chose avec le nom de l'ingrédient ici
                });
            });

            // Gestion des événements pour le bouton Ingrédients et sa flèche
            ingredientsButton.addEventListener('click', toggleIngredientDropdown);
            ingredientsButton.querySelector('.dropdown-arrow').addEventListener('click', toggleIngredientDropdown);

            // Gestion des événements pour le bouton Appareils
            appliancesButton.addEventListener('click', toggleDropdown(appliancesDropdown));

            // Gestion des événements pour le bouton Ustensiles
            ustensilsButton.addEventListener('click', toggleDropdown(ustensilsDropdown));

            function toggleIngredientDropdown() {
                closeDropdowns(appliancesDropdown, ustensilsDropdown);
                ingredientsDropdown.classList.toggle('show');
            }

            function toggleDropdown(dropdown) {
                return function () {
                    closeDropdowns(ingredientsDropdown, dropdown === appliancesDropdown ? ustensilsDropdown : appliancesDropdown);
                    dropdown.classList.toggle('show');
                };
            }

            function closeDropdowns(...dropdowns) {
                dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
            }

        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});

export { tags };