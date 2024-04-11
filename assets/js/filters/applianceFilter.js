// import { getUniqueItems } from './filterFactory.js';
// import { handleSelection } from '../selectionHandler.js';
export { getUniqueItems, generateDropdown, handleSelection };


export function generateApplianceDropdown(recipes) {
    const uniqueAppliances = getUniqueItems(recipes, 'appliance');
    generateDropdown(uniqueAppliances, '.btn-appliance', handleSelection);
}

// Fonction pour gérer la sélection de l'appareil
function handleApplianceSelection(selectedAppliance) {
    // Sélection de l'élément où afficher l'appareil sélectionné
    const selectedApplianceDisplay = document.querySelector('.selected-appliance');

    // Afficher l'appareil sélectionné à l'écran
    selectedApplianceDisplay.textContent = `${selectedAppliance}`;

}


