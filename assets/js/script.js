import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';

const tags = []

let allRecipes; // Déclarer la variable globale allRecipes
document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            allRecipes = recipes;

            RecipeFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

            const ingredientsButton = document.querySelector('.btn-ingredients');
            const appliancesButton = document.querySelector('.btn-appliance');
            const ustensilsButton = document.querySelector('.btn-ustensils');
            const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
            const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
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

            // function displayTags() {
            //     const tagsContainer = document.querySelector('.tags-container');
            //     // tagsContainer.innerHTML = ''; // Efface les tags précédents

            //     tags.forEach(tag => {
            //         const tagElement = document.createElement('div');
            //         tagElement.classList.add('tag');
            //         tagElement.classList.add(`tag-${tag.type}`);
            //         tagElement.textContent = tag.value;
            //         tagsContainer.appendChild(tagElement);
            //     });
            // }

            function displayTags() {
                const tagsContainer = document.querySelector('.tags-container');
                tagsContainer.innerHTML = ''; // Efface les tags précédents
            
                tags.forEach(tag => {
                    const tagElement = document.createElement('div');
                    tagElement.classList.add('tag');
                    tagElement.classList.add(`tag-${tag.type}`);
                    tagElement.textContent = tag.value;
                    tagsContainer.appendChild(tagElement);
                });
            }
            

        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});

export { tags };