// Importez ce qui est nécessaire
import { getUniqueAppliances } from './filterFactory.js'; // Importez la fonction pour obtenir des appareils uniques

// Fonction pour générer le menu déroulant des appareils
export function generateApplianceDropdown(recipes) {
    const uniqueAppliances = getUniqueAppliances(recipes);
    const appliancesDropdown = document.querySelector('.btn-appliance'); // Assurez-vous que la classe est correcte

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    uniqueAppliances.forEach(appliance => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = appliance;
        menuItem.addEventListener('click', () => {
            console.log('Appareil sélectionné :', appliance);
        });
        dropdownMenu.appendChild(menuItem);
    });

    appliancesDropdown.appendChild(dropdownMenu);

    const dropdownArrow = document.querySelector('.dropdown-arrow');

    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
}
