import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';

export function generateIngredientDropdown(recipes) {
    const ingredients = recipes.map(recipe => recipe.ingredients).flat().map(ing => ing.ingredient)
    const uniqueIngredients = getUniqueItems(ingredients);
    generateDropdown(uniqueIngredients, '.btn-ingredients', handleIngredientSelection);
}

function handleIngredientSelection(selectedIngredient) {
    tags.push({
        value: selectedIngredient,
        type: "ingredient"
    })
    console.log(tags)
}