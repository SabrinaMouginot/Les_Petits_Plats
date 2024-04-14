// export { generateDropdown, getUniqueItems, handleSelection };


export function getUniqueItems(recipes, property) {
    let uniqueItemsSet = new Set(); // Utiliser un ensemble pour stocker les éléments uniques

    // Parcourir chaque recette pour extraire les éléments de la propriété spécifiée
    recipes.forEach(recipe => {
        const propertyValue = recipe[property];
        if (Array.isArray(propertyValue)) {
            propertyValue.forEach(item => {
                if (typeof item === 'string') { // Vérifier si l'élément est une chaîne de caractères
                    uniqueItemsSet.add(item); // Ajouter chaque élément à l'ensemble
                }
            });
        } else if (typeof propertyValue === 'string') { // Vérifier si la propriété est une chaîne de caractères
            uniqueItemsSet.add(propertyValue);
        }
    });

    // Convertir l'ensemble en un tableau et le trier par ordre alphabétique
    let uniqueItemsArray = Array.from(uniqueItemsSet).sort((a, b) => a.localeCompare(b));

    return uniqueItemsArray;
}


// Fonction générique pour générer un menu déroulant à partir d'une liste d'éléments uniques
export function generateDropdown(uniqueItems, dropdownSelector, handleSelection) {
    const dropdownContainer = document.querySelector(dropdownSelector);
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    
    uniqueItems.forEach(item => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = item;
        menuItem.addEventListener('click', () => {
            console.log(`${item} sélectionné :`, item);
            handleSelection(item);
        });
        dropdownMenu.appendChild(menuItem);
    });

    dropdownContainer.appendChild(dropdownMenu);

    const dropdownArrow = document.querySelector('.dropdown-arrow');
    dropdownArrow.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
}


// // Fonction générique pour gérer la sélection d'un élément
// export function handleSelection(selectedItem) {
//     const selectedItemDisplay = document.querySelector(`.selected-${selectedItem}`);
//     selectedItemDisplay.textContent = selectedItem;
//     // Ajouter le reste de la logique de gestion de la sélection ici
// }


// Fonction générique pour gérer la sélection d'un élément
export function handleSelection(selectedItem) {
    let selectedItemDisplay = document.querySelector(`.selected-${selectedItem}`);
    if (!selectedItemDisplay) {
        // Créer l'élément s'il n'existe pas
        selectedItemDisplay = document.createElement('div');
        selectedItemDisplay.classList.add(`selected-${selectedItem}`);
        // Sélectionner l'emplacement où vous souhaitez insérer l'élément (par exemple, le corps du document)
        const container = document.body;
        // Ajouter l'élément au conteneur
        container.appendChild(selectedItemDisplay);
    }
    // Mettre à jour le contenu de l'élément
    selectedItemDisplay.textContent = selectedItem;
    // Ajouter le reste de la logique de gestion de la sélection ici
}
