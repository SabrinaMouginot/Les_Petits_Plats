import * as FilterFactory from './filterFactory.js';

// Déclarer une variable pour stocker l'élément de menu déroulant des ingrédients
const ingredientsDropdown = document.querySelector('.btn-ingredients');

// Fonction pour générer le menu déroulant des ingrédients
export function generateIngredientDropdown(recipes) {
    console.log('La fonction generateIngredientDropdown est appelée.');
    const uniqueIngredients = FilterFactory.getUniqueIngredients(recipes);
    console.log('Ingrédients uniques :', uniqueIngredients);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    uniqueIngredients.forEach(ingredient => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = ingredient;
        menuItem.addEventListener('click', () => {
            console.log('Ingrédient sélectionné :', ingredient);
            // Ici,appeler une fonction pour traiter la sélection de l'ingrédient
            // Par exemple, filtrer les recettes et mettre à jour l'affichage
            handleIngredientSelection(ingredient);
            // handleIngredientSelection(ingredient, recipes); // Passer les recettes comme deuxième argument
        });
        dropdownMenu.appendChild(menuItem);
    });

    ingredientsDropdown.appendChild(dropdownMenu);

    const dropdownArrow = document.querySelector('.dropdown-arrow');

    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
}

// Fonction pour gérer la sélection d'ingrédient
function handleIngredientSelection(selectedIngredient) {
    // Sélection de l'élément où afficher l'ingrédient sélectionné dans le navigateur
    const selectedIngredientDisplay = document.querySelector('.selected-ingredient');

    // Afficher l'ingrédient sélectionné à l'écran
    selectedIngredientDisplay.textContent = `${selectedIngredient}`;

}

// function handleIngredientSelection(selectedIngredient, allRecipes) {
//     const selectedIngredientDisplay = document.querySelector('.selected-ingredient');
//     selectedIngredientDisplay.textContent = `${selectedIngredient}`;

//     const filteredRecipes = allRecipes.filter(recipe =>
//         recipe.ingredients.some(ingredient => ingredient.ingredient === selectedIngredient)
//     );

//     RenderFactory.renderRecipes(filteredRecipes); // Utiliser la fonction renderRecipes du RenderFactory
// }
