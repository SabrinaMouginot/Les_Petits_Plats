import RecipeFactory from './recipeFactory.js';
import RenderFactory from './renderFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';

let allRecipes; // Déclarer la variable globale allRecipes
document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            // Assurez-vous que les recettes sont accessibles ici
            allRecipes = recipes;

            RenderFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

            const ingredientsButton = document.querySelector('.btn-ingredients');
            const appliancesButton = document.querySelector('.btn-appliance');
            const ustensilsButton = document.querySelector('.btn-ustensils');

            ingredientsButton.addEventListener('click', function () {
                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                if (appliancesDropdown.classList.contains('show')) {
                    appliancesDropdown.classList.remove('show');
                }

                const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
                if (ustensilsDropdown.classList.contains('show')) {
                    ustensilsDropdown.classList.remove('show');
                }

                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                ingredientsDropdown.classList.toggle('show');
            });

            appliancesButton.addEventListener('click', function () {
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                if (ingredientsDropdown.classList.contains('show')) {
                    ingredientsDropdown.classList.remove('show');
                }

                const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
                if (ustensilsDropdown.classList.contains('show')) {
                    ustensilsDropdown.classList.remove('show');
                }

                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                appliancesDropdown.classList.toggle('show');
            });

            ustensilsButton.addEventListener('click', function () {
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                if (ingredientsDropdown.classList.contains('show')) {
                    ingredientsDropdown.classList.remove('show');
                }

                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                if (appliancesDropdown.classList.contains('show')) {
                    appliancesDropdown.classList.remove('show');
                }

                const ustensilsDropdown = document.querySelector('.btn-ustensils .dropdown-menu');
                ustensilsDropdown.classList.toggle('show');
            });

            // Ajouter un événement de clic sur le bouton d'ingrédients pour afficher/masquer le menu déroulant
            ingredientsButton.addEventListener('click', function () {
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                ingredientsDropdown.classList.toggle('show');
            });
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});
