// // Importer RecipeFactory depuis recipeFactory.js
// import RecipeFactory from './recipeFactory.js';
// import { generateIngredientDropdown } from './filters/ingredientFilter.js';
// import { generateApplianceDropdown } from './filters/applianceFilter.js';
// import { generateUstensilDropdown } from './filters/ustensilFilter.js';

// // Déclarer la variable globale allRecipes
// let allRecipes;

// // Écouter l'événement DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function () {
//     // Charger les recettes
//     RecipeFactory.loadRecipes()
//         .then(recipes => {
//             // Assurez-vous que les recettes sont accessibles ici
//             allRecipes = recipes;

//             // Afficher les recettes
//             RecipeFactory.renderRecipes(recipes);
//             generateIngredientDropdown(recipes);
//             generateApplianceDropdown(recipes);
//             generateUstensilDropdown(recipes);

//             // Sélectionner les boutons
//             const ingredientsButton = document.querySelector('.btn-ingredients');
//             const appliancesButton = document.querySelector('.btn-appliance');
//             const ustensilsButton = document.querySelector('.btn-ustensils');

//             // Ajouter des écouteurs d'événements pour les boutons
//             ingredientsButton.addEventListener('click', function () {
//                 const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
//                 ingredientsDropdown.classList.toggle('show');
//             });

//             appliancesButton.addEventListener('click', function () {
//                 const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
//                 appliancesDropdown.classList.toggle('show');
//             });

//             ustensilsButton.addEventListener('click', function () {
//                 const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
//                 ustensilsDropdown.classList.toggle('show');
//             });
//         })
//         .catch(error => console.error('Erreur de chargement des données :', error));
// });

import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';

let allRecipes; // Déclarer la variable globale allRecipes
document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            // Assurez-vous que les recettes sont accessibles ici
            allRecipes = recipes;

            RecipeFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

            const ingredientsButton = document.querySelector('.btn-ingredients');
            const appliancesButton = document.querySelector('.btn-appliance');
            const ustensilsButton = document.querySelector('.btn-ustensils');

            ingredientsButton.addEventListener('click', function () {
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                toggleDropdown(ingredientsDropdown);
            });

            appliancesButton.addEventListener('click', function () {
                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                toggleDropdown(appliancesDropdown);
            });

            ustensilsButton.addEventListener('click', function () {
                const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
                toggleDropdown(ustensilsDropdown);
            });

            const dropdownArrow = document.querySelector('.dropdown-arrow');

            dropdownArrow.addEventListener('click', function () {
                const dropdownMenus = document.querySelectorAll('.dropdown-menu');
                dropdownMenus.forEach(menu => {
                    if (menu.classList.contains('show')) {
                        menu.classList.remove('show');
                    }
                });
            });
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});

function toggleDropdown(dropdown) {
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach(menu => {
        if (menu !== dropdown && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
    dropdown.classList.toggle('show');
}
