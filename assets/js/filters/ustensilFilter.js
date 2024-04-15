import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';

export function generateUstensilDropdown(recipes) {
    const ustensils = recipes.map(recipe => recipe.ustensils).flat()
    const uniqueUstensils = getUniqueItems(ustensils);
    console.log(uniqueUstensils);
    generateDropdown(uniqueUstensils, '.btn-ustensils', handleUstensilSelection);
}

function handleUstensilSelection(selectedUstensil) {
    tags.push({
        value: selectedUstensil,
        type: "ustensil"
    })
    console.log(tags)
}

