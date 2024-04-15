import { getUniqueItems, generateDropdown, handleSelection } from './filterFactory.js';

export function generateIngredientDropdown(recipes) {
    const uniqueIngredients = getUniqueItems(recipes, 'ingredients');
    generateDropdown(uniqueIngredients, '.btn-ingredients', handleSelection);
}

export function handleIngredientSelection(selectedIngredient) {
    handleSelection(selectedIngredient);
}