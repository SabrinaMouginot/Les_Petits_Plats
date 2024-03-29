import * as FilterFactory from './filterFactory.js'; // Assurez-vous d'importer FilterFactory

export function generateIngredientDropdown(recipes) {
    console.log('La fonction generateIngredientDropdown est appelée.');
    const uniqueIngredients = FilterFactory.getUniqueIngredients(recipes);
    console.log('Ingrédients uniques :', uniqueIngredients);
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
