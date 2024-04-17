import { getUniqueItems, generateDropdown } from './filterFactory.js';
import { tags } from '../script.js';
import { displayTags } from '../script.js';

export function generateApplianceDropdown(recipes) {
    const appliances = recipes.map(recipe => recipe.appliance)
    const uniqueAppliances = getUniqueItems(appliances);
    generateDropdown(uniqueAppliances, '.btn-appliances', handleApplianceSelection);
}

// export function handleApplianceSelection(selectedAppliance) {
//     tags.push({
//         value: selectedAppliance,
//         type: "appliance"
//     })
//     console.log(tags)
// }

export function handleApplianceSelection(selectedAppliance) {
    // Vérifier si l'appareil sélectionné existe déjà dans tags
    const existingIndex = tags.findIndex(tag => tag.value === selectedAppliance && tag.type === "appliance");

    if (existingIndex !== -1) {
        // Si l'appareil existe déjà, le retirer du tableau
        tags.splice(existingIndex, 1);
        console.log(`L'appareil "${selectedAppliance}" a été retiré.`);
    } else {
        // Sinon, ajouter l'appareil au tableau
        tags.push({
            value: selectedAppliance,
            type: "appliance"
        });
        console.log(`L'appareil "${selectedAppliance}" a été ajouté.`);
    }

    console.log(tags);

    displayTags();
}