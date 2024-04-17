import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';
import { displayTags } from '../script.js';

export function generateUstensilDropdown(recipes) {
    const ustensils = recipes.map(recipe => recipe.ustensils).flat()
    const uniqueUstensils = getUniqueItems(ustensils);
    console.log(uniqueUstensils);
    generateDropdown(uniqueUstensils, '.btn-ustensils', handleUstensilSelection);
}

export function handleUstensilSelection(selectedUstensil) {
    // Vérifier si l'ustensile sélectionné existe déjà dans tags
    const existingIndex = tags.findIndex(tag => tag.value === selectedUstensil && tag.type === "ustensil");

    if (existingIndex !== -1) {
        // Si l'ustensile existe déjà, le retirer du tableau
        tags.splice(existingIndex, 1);
        console.log(`L'ustensile "${selectedUstensil}" a été retiré.`);
    } else {
        // Sinon, ajouter l'ustensile au tableau
        tags.push({
            value: selectedUstensil,
            type: "ustensil"
        });
        console.log(`L'ustensile "${selectedUstensil}" a été ajouté.`);
    }

    console.log(tags);

    displayTags();
}