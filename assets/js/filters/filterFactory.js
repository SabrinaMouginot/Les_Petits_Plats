//Barre de recherche en haut de la liste déroulante
export function createSearchBar(containerSelector, handleSearch) {
    const container = document.querySelector(containerSelector);

    // Créer la barre de recherche
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.classList.add('form-control', 'mb-2');
    searchBar.placeholder = 'Rechercher...';
    searchBar.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        handleSearch(searchText);
    });

    // Ajouter la barre de recherche au conteneur
    container.appendChild(searchBar);
}

export function getUniqueItems(elements) {

    // Convertir l'ensemble en un tableau et le trier par ordre alphabétique
    let uniqueItemsArray = Array.from(new Set(elements)).sort((a, b) => a.localeCompare(b));

    return uniqueItemsArray;
}

export function generateDropdown(uniqueItems, containerSelector, handleSelection, handleSearch) {
    const container = document.querySelector(containerSelector);

    // Créer la liste déroulante
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.style.display = 'none'; // Cacher la liste déroulante initialement

    // Créer la barre de recherche
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.classList.add('form-control', 'mb-2', 'search-bar', 'show'); // Rendre la barre de recherche initialement visible
    searchBar.placeholder = 'Rechercher...';
    searchBar.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        handleSearch(searchText); // Appeler la fonction handleSearch avec le texte de recherche
    });

    // Ajouter la barre de recherche à la liste déroulante
    dropdownMenu.appendChild(searchBar);

    uniqueItems.forEach(item => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = item;
        menuItem.addEventListener('click', () => {
            handleSelection(item);
        });
        dropdownMenu.appendChild(menuItem);
    });

    // Ajouter la liste déroulante au conteneur
    container.appendChild(dropdownMenu);

    // Gérer l'ouverture/fermeture de la liste déroulante
    container.addEventListener('click', () => {
        dropdownMenu.style.display = 'block'; // Afficher la liste déroulante lorsque le bouton est cliqué
        searchBar.focus(); // Mettre le focus sur la barre de recherche lorsque la liste déroulante est ouverte
    });
}

// Fonction appelée lors de la recherche dans la barre de recherche
export function handleSearch(searchText) {
    // ajouter la logique de recherche ici en fonction du texte de recherche
    // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
    const searchTextLowerCase = searchText.toLowerCase();

    // Sélectionner tous les éléments de la liste déroulante que vous souhaitez filtrer
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Parcourir chaque élément de la liste déroulante
    dropdownItems.forEach(item => {
        // Récupérer le texte de chaque élément
        const itemText = item.textContent.toLowerCase();

        // Vérifier si le texte de l'élément contient le texte de recherche
        if (itemText.includes(searchTextLowerCase)) {
            // Afficher l'élément s'il correspond au texte de recherche
            item.style.display = 'block';
        } else {
            // Masquer l'élément s'il ne correspond pas au texte de recherche
            item.style.display = 'none';
        }
    });
}


// // Fonction générique pour gérer la sélection d'un élément
// export function handleSelection(selectedItem) {
//     let selectedItemDisplay = document.querySelector(`.selected-${selectedItem}`);
//     if (!selectedItemDisplay) {
//         // Créer l'élément s'il n'existe pas
//         selectedItemDisplay = document.createElement('div');
//         selectedItemDisplay.classList.add(`selected-${selectedItem}`);
//         // Sélectionner l'emplacement où vous souhaitez insérer l'élément (par exemple, le corps du document)
//         const container = document.body;
//         // Ajouter l'élément au conteneur
//         container.appendChild(selectedItemDisplay);
//     }
//     // Mettre à jour le contenu de l'élément
//     selectedItemDisplay.textContent = selectedItem;
//     // Ajouter le reste de la logique de gestion de la sélection ici
// }