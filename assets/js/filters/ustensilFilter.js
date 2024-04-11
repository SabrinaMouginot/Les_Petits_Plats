// import { getUniqueItems } from './filterFactory.js';
// import { handleSelection } from '../selectionHandler.js';
export { getUniqueItems, generateDropdown, handleSelection };


export function generateUstensilDropdown(recipes) {
    const uniqueUstensils = getUniqueItems(recipes, 'ustensils');
    generateDropdown(uniqueUstensils, '.btn-ustensils', handleSelection);
}

// Fonction pour gérer la sélection d'ingrédient
function handleUstensilSelection(selectedUstensil) {
    // Sélection de l'élément où afficher l'ingrédient sélectionné dans le navigateur
    const selectedUstensilDisplay = document.querySelector('.selected-ustensil');

    // Afficher l'ingrédient sélectionné à l'écran
    selectedUstensilDisplay.textContent = `${selectedUstensil}`;
}

