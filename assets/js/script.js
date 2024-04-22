// import RecipeFactory from './recipeFactory.js';
// import { generateIngredientDropdown } from './filters/ingredientFilter.js';
// import { generateApplianceDropdown } from './filters/applianceFilter.js';
// import { generateUstensilDropdown } from './filters/ustensilFilter.js';
// import { createSearchBar } from './filters/filterFactory.js';

// const tags = [];

// let allRecipes; // Déclarer la variable globale allRecipes

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
// }

// document.addEventListener('DOMContentLoaded', function () {
//     RecipeFactory.loadRecipes()
//         .then(recipes => {
//             allRecipes = recipes;

//             RecipeFactory.renderRecipes(recipes);
//             generateIngredientDropdown(recipes);
//             generateApplianceDropdown(recipes);
//             generateUstensilDropdown(recipes);

//             const ingredientsButton = document.querySelector('.btn-ingredients');
//             const appliancesButton = document.querySelector('.btn-appliances');
//             const ustensilsButton = document.querySelector('.btn-ustensils');
//             const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
//             const appliancesDropdown = document.querySelector('.btn-appliances .dropdown-menu');
//             const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
//             const containerSelector = '.dropdown-menu';
//             const container = document.querySelector(containerSelector);


//             // Créer la barre de recherche et la placer dans le conteneur
//             createSearchBar(containerSelector);

//             // Gestion des événements pour le bouton Ingrédients et sa flèche
//             ingredientsButton.addEventListener('click', toggleDropdown(ingredientsDropdown, [appliancesDropdown, ustensilsDropdown]));
//             ingredientsButton.querySelector('.dropdown-arrow').addEventListener('click', toggleDropdown(ingredientsDropdown, [appliancesDropdown, ustensilsDropdown]));

//             // Gestion des événements pour le bouton Appareils
//             appliancesButton.addEventListener('click', toggleDropdown(appliancesDropdown, [ingredientsDropdown, ustensilsDropdown]));

//             // Gestion des événements pour le bouton Ustensiles
//             ustensilsButton.addEventListener('click', toggleDropdown(ustensilsDropdown, [ingredientsDropdown, appliancesDropdown]));


//             // // Gestion des événements pour le bouton Ingrédients et sa flèche
//             // ingredientsButton.addEventListener('click', toggleIngredientDropdown);
//             // ingredientsButton.querySelector('.dropdown-arrow').addEventListener('click', toggleIngredientDropdown);

//             // // Gestion des événements pour le bouton Appareils
//             // appliancesButton.addEventListener('click', toggleDropdown(appliancesDropdown));

//             // // Gestion des événements pour le bouton Ustensiles
//             // ustensilsButton.addEventListener('click', toggleDropdown(ustensilsDropdown));

//             function toggleIngredientDropdown() {
//                 closeDropdowns(appliancesDropdown, ustensilsDropdown);
//                 ingredientsDropdown.classList.toggle('show');
//             }

//             function toggleDropdown(dropdown, otherDropdowns) {
//                 return function () {
//                     // Fermer tous les menus déroulants, sauf celui qui est associé au bouton cliqué
//                     otherDropdowns.forEach(otherDropdown => {
//                         if (otherDropdown.classList.contains('show')) {
//                             otherDropdown.classList.remove('show');
//                         }
//                     });
//                     dropdown.classList.toggle('show'); // Ouvrir le menu déroulant associé au bouton cliqué
//                 };
//             }

//             // function toggleDropdown(dropdown) {
//             //     return function () {
//             //         closeDropdowns(ingredientsDropdown, appliancesDropdown, ustensilsDropdown);
//             //         dropdown.classList.toggle('show');
//             //     };
//             // }

//             function closeDropdowns(...dropdowns) {
//                 dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
//             }


//             // function toggleIngredientDropdown() {
//             //     if (ingredientsDropdown) { // Vérifier si ingredientsDropdown est défini
//             //         closeDropdowns(appliancesDropdown, ustensilsDropdown);
//             //         ingredientsDropdown.classList.toggle('show');
//             //     }
//             // }

//             // function toggleDropdown(dropdown) {
//             //     return function () {
//             //         closeDropdowns(ingredientsDropdown, appliancesDropdown, ustensilsDropdown); // Fermer tous les menus déroulants
//             //         dropdown.classList.toggle('show');
//             //     };
//             // }

//             // function closeDropdowns(...dropdowns) {
//             //     dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
//             // }

//         })
//         .catch(error => console.error('Erreur de chargement des données :', error));
// });

// export { tags };

import { createSearchBar, handleSearch } from './filters/filterFactory.js';
import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';


function setupFilterListeners() {
    // Ajouter le code pour définir les écouteurs d'événements des filtres
    // Ajouter des écouteurs pour les boutons de filtre et appeler handleSearch lorsque la recherche est effectuée
}

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

            setupFilterListeners(); // Appel à la fonction setupFilterListeners une fois que les recettes sont chargées

        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});


export { tags };
