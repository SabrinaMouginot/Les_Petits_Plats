import RecipeFactory from './recipeFactory.js';
import RenderFactory from './renderFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';


document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            RenderFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes); // Appel de la fonction pour générer le menu déroulant des ingrédients
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});



document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            RenderFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes); // Appel de la fonction pour générer le menu déroulant des ingrédients
            generateApplianceDropdown(recipes); // Appel de la fonction pour générer le menu déroulant des appareils

            // Sélection des boutons d'ingrédients et d'appareils
            const ingredientsButton = document.querySelector('.btn-ingredients');
            const appliancesButton = document.querySelector('.btn-appliance');

            // Ajout des écouteurs d'événements pour les boutons
            ingredientsButton.addEventListener('click', function () {
                // Fermer le menu déroulant des appareils s'il est ouvert
                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                if (appliancesDropdown.classList.contains('show')) {
                    appliancesDropdown.classList.remove('show');
                }

                // Ouvrir le menu déroulant des ingrédients
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                ingredientsDropdown.classList.toggle('show');
            });

            appliancesButton.addEventListener('click', function () {
                // Fermer le menu déroulant des ingrédients s'il est ouvert
                const ingredientsDropdown = document.querySelector('.btn-ingredients .dropdown-menu');
                if (ingredientsDropdown.classList.contains('show')) {
                    ingredientsDropdown.classList.remove('show');
                }

                // Ouvrir le menu déroulant des appareils
                const appliancesDropdown = document.querySelector('.btn-appliance .dropdown-menu');
                appliancesDropdown.classList.toggle('show');
            });
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});
