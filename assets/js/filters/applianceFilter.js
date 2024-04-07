import { getUniqueAppliances } from './filterFactory.js'; // Assurez-vous que le chemin est correct

export function generateApplianceDropdown(recipes) {
    const uniqueAppliances = getUniqueAppliances(recipes);
    const appliancesDropdown = document.querySelector('.btn-appliance');

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    uniqueAppliances.forEach(appliance => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = appliance;
        menuItem.addEventListener('click', () => {
            console.log('Appareil sélectionné :', appliance);
            handleApplianceSelection(appliance); // Appel de la fonction pour gérer la sélection de l'appareil
        });
        dropdownMenu.appendChild(menuItem);
    });

    appliancesDropdown.appendChild(dropdownMenu);

    const dropdownArrow = document.querySelector('.dropdown-arrow');

    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
}

// Fonction pour gérer la sélection de l'appareil
function handleApplianceSelection(selectedAppliance) {
    // Sélection de l'élément où afficher l'appareil sélectionné
    const selectedApplianceDisplay = document.querySelector('.selected-appliance');

    // Afficher l'appareil sélectionné à l'écran
    selectedApplianceDisplay.textContent = `${selectedAppliance}`;

    // Filtrer les recettes en fonction de l'appareil sélectionné
    // const filteredRecipes = recipes.filter(recipe => recipe.appliance === selectedAppliance);

    // Rendre les recettes filtrées sur la page
    // renderRecipes(filteredRecipes);
}