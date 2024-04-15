import { getUniqueItems, generateDropdown, handleSelection } from './filterFactory.js';

export function generateApplianceDropdown(recipes) {
    const uniqueAppliances = getUniqueItems(recipes, 'appliance');
    generateDropdown(uniqueAppliances, '.btn-appliance', handleSelection);
}

export function handleApplianceSelection(selectedAppliance) {
    handleSelection(selectedAppliance);
}