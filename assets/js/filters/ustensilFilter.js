import { getUniqueItems, generateDropdown, handleSelection } from './filterFactory.js';

export function generateUstensilDropdown(recipes) {
    const uniqueUstensils = getUniqueItems(recipes, 'ustensils');
    generateDropdown(uniqueUstensils, '.btn-ustensils', handleSelection);
}

export function handleUstensilSelection(selectedUstensil) {
    handleSelection(selectedUstensil);
}

