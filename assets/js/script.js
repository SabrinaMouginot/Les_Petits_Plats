import RecipeFactory from './recipeFactory.js';
import RenderFactory from './renderFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';

document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            RenderFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes); // Appel de la fonction pour générer le menu déroulant des ingrédients
            generateApplianceDropdown(recipes); // Appel de la fonction pour générer le menu déroulant des appareils
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});