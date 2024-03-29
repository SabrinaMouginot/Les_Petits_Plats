import * as FilterFactory from './filterFactory.js';

// Fonction pour générer le menu déroulant des ingrédients
export function generateIngredientDropdown(recipes) {
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