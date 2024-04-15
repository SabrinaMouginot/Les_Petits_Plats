import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';

export function generateApplianceDropdown(recipes) {
    const appliances = recipes.map(recipe => recipe.appliance)
    const uniqueAppliances = getUniqueItems(appliances);
    generateDropdown(uniqueAppliances, '.btn-appliance', handleApplianceSelection);
}

export function handleApplianceSelection(selectedAppliance) {
    tags.push({
        value: selectedAppliance,
        type: "appliance"
    })
    console.log(tags)
}