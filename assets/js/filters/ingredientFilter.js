import { getUniqueItems, generateDropdown, handleSelection } from './filterFactory.js';

export function generateIngredientDropdown(recipes) {
    const uniqueIngredients = getUniqueItems(recipes, 'ingredients');
    generateDropdown(uniqueIngredients, '.btn-ingredients', handleSelection);
}

// Fonction pour gérer la sélection d'ingrédient
function handleIngredientSelection(selectedIngredient) {
    // Sélection de l'élément où afficher l'ingrédient sélectionné dans le navigateur
    const selectedIngredientDisplay = document.querySelector('.selected-ingredient');

    // Afficher l'ingrédient sélectionné à l'écran
    selectedIngredientDisplay.textContent = `${selectedIngredient}`;

}
