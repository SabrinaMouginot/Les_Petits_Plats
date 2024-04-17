import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';
import { displayTags } from '../script.js';

export function generateIngredientDropdown(recipes) {
    const ingredients = recipes.map(recipe => recipe.ingredients).flat().map(ing => ing.ingredient)
    const uniqueIngredients = getUniqueItems(ingredients);
    // generateDropdown(uniqueIngredients, '.btn-ingredients', handleIngredientSelection);
    generateDropdown(uniqueIngredients, '.btn-ingredients', handleIngredientSelection, displayTags);

}

function handleIngredientSelection(selectedIngredient) {
    // Vérifier si l'ingrédient sélectionné existe déjà dans tags
    const existingIndex = tags.findIndex(tag => tag.value === selectedIngredient && tag.type === "ingredient");

    if (existingIndex !== -1) {
        // Si l'ingrédient existe déjà, le retirer du tableau
        tags.splice(existingIndex, 1);
        console.log(`L'ingrédient "${selectedIngredient}" a été retiré.`);
    } else {
        // Sinon, ajouter l'ingrédient au tableau
        tags.push({
            value: selectedIngredient,
            type: "ingredient"
        });
        console.log(`L'ingrédient "${selectedIngredient}" a été ajouté.`);
    }

    console.log(tags);

    displayTags();
}