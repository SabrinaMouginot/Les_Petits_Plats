import { getUniqueUstensils } from './filterFactory.js'; // Assurez-vous que le chemin est correct

export function generateUstensilDropdown(recipes) {
    const uniqueUstensils = getUniqueUstensils(recipes); // Utilisation de la fonction pour obtenir les ustensiles uniques
    const ustensilsDropdown = document.querySelector('.btn-ustensils'); // Sélection du conteneur du bouton Ustensiles

    const dropdownMenu = document.createElement('div'); // Création du menu déroulant
    dropdownMenu.classList.add('dropdown-menu'); // Ajout des classes Bootstrap
    uniqueUstensils.forEach(ustensil => {
        const menuItem = document.createElement('button'); // Création d'un élément de menu pour chaque ustensile
        menuItem.classList.add('dropdown-item'); // Ajout des classes Bootstrap
        menuItem.type = 'button'; // Spécification du type de bouton
        menuItem.textContent = ustensil; // Définition du texte du bouton à l'ustensile actuel
        menuItem.addEventListener('click', () => {
            console.log('Ustensile sélectionné :', ustensil); // Ajout d'un gestionnaire d'événement pour afficher l'ustensile sélectionné
            handleUstensilSelection(ustensil); // Afficher l'ustensile sélectionné
        });
        dropdownMenu.appendChild(menuItem); // Ajout de l'élément de menu au menu déroulant
    });

    ustensilsDropdown.appendChild(dropdownMenu); // Ajout du menu déroulant au conteneur du bouton Ustensiles

    const dropdownArrow = document.querySelector('.dropdown-arrow'); // Sélection de la flèche du menu déroulant

    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show'); // Ajout d'un gestionnaire d'événement pour afficher ou masquer le menu déroulant lors du clic sur la flèche
    });
}

// Fonction pour gérer la sélection d'ingrédient
function handleUstensilSelection(selectedUstensil) {
    // Sélection de l'élément où afficher l'ingrédient sélectionné dans le navigateur
    const selectedUstensilDisplay = document.querySelector('.selected-ustensil');

    // Afficher l'ingrédient sélectionné à l'écran
    selectedUstensilDisplay.textContent = `${selectedUstensil}`;
}