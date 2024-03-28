import RecipeFactory from './recipeFactory.js';
import RenderFactory from './renderFactory.js';
import * as FilterFactory from './filterFactory.js';

document.addEventListener('DOMContentLoaded', function () {
    RecipeFactory.loadRecipes()
        .then(recipes => {
            RenderFactory.renderRecipes(recipes);
            generateIngredientsDropdown(recipes);
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});

function generateIngredientsDropdown(recipes) {
    const uniqueIngredients = FilterFactory.getUniqueIngredients(recipes);
    const ingredientsDropdown = document.querySelector('.btn-ingredients');

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    uniqueIngredients.forEach(ingredient => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = ingredient;
        menuItem.addEventListener('click', () => {
            console.log('Ingrédient sélectionné :', ingredient);
        });
        dropdownMenu.appendChild(menuItem);
    });

    ingredientsDropdown.appendChild(dropdownMenu);

    const dropdownArrow = document.querySelector('.dropdown-arrow');

    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
}
