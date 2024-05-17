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
        handleSearch(searchText, uniqueItems); // Appeler la fonction handleSearch avec le texte de recherche
    });

    // Ajouter la barre de recherche à la liste déroulante
    dropdownMenu.appendChild(searchBar);

    uniqueItems.forEach(item => {
        const menuItem = document.createElement('button');
        menuItem.classList.add('dropdown-item');
        menuItem.type = 'button';
        menuItem.textContent = item;

        menuItem.addEventListener('click', () => {
            // menuItem.classList.add('dropdown-menu-selected');
            // Ajouter ou supprimer la classe dropdown-menu-selected au clic
            menuItem.classList.toggle('dropdown-menu-selected');
            handleSelection(item);
        });

        dropdownMenu.appendChild(menuItem);
    });

    // Ajouter la liste déroulante au conteneur
    container.appendChild(dropdownMenu);

    // Gérer l'ouverture/fermeture de la liste déroulante
    container.addEventListener('click', (event) => {
        const dropdownArrow = event.target.closest('.dropdown-arrow');
        if (dropdownArrow) {
            const isOpen = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isOpen ? 'none' : 'block';
            dropdownArrow.classList.toggle('rotate', !isOpen);
            searchBar.focus(); // Mettre le focus sur la barre de recherche lorsque la liste déroulante est ouverte
        }
    });
}

// Fonction appelée lors de la recherche dans la barre de recherche
export function handleSearch(searchText, uniqueItems) {
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


// A FAIRE (sélection/déselection des filtres dans le menu déroulant)
// Vérifier si l'élément actuel (menuItem) est déjà sélectionné en vérifiant s'il a la classe dropdown-menu-selected.
// Si l'élément est déjà sélectionné (c'est-à-dire isSelected est true), alors nous retirons la classe dropdown-menu-selected, le désélectionnant ainsi.
// Si l'élément n'est pas déjà sélectionné (c'est-à-dire isSelected est false), alors nous ajoutons la classe dropdown-menu-selected, le sélectionnant ainsi.


// // Fonction pour gérer la sélection/déselection des filtres dans le menu déroulant
// function handleFilterSelection(menuItem) {
//     const isSelected = menuItem.classList.contains('dropdown-menu-selected');

//     if (isSelected) {
//         // Si l'élément est déjà sélectionné, le désélectionner en retirant la classe
//         menuItem.classList.remove('dropdown-menu-selected');
//     } else {
//         // Si l'élément n'est pas déjà sélectionné, le sélectionner en ajoutant la classe
//         menuItem.classList.add('dropdown-menu-selected');
//     }
// }


// // Barre de recherche en haut de la liste déroulante
// export function createSearchBar(containerSelector, handleSearch) {
//     const container = document.querySelector(containerSelector);

//     // Créer la barre de recherche
//     const searchBar = document.createElement('input');
//     searchBar.type = 'text';
//     searchBar.classList.add('form-control', 'mb-2');
//     searchBar.placeholder = 'Rechercher...';
//     searchBar.addEventListener('input', (event) => {
//         const searchText = event.target.value.toLowerCase();
//         handleSearch(searchText);
//     });

//     // Ajouter la barre de recherche au conteneur
//     container.appendChild(searchBar);
// }

// export function getUniqueItems(elements) {
//     // Convertir l'ensemble en un tableau et le trier par ordre alphabétique
//     let uniqueItemsArray = Array.from(new Set(elements)).sort((a, b) => a.localeCompare(b));
//     return uniqueItemsArray;
// }

// export function generateDropdown(uniqueItems, containerSelector, handleSelection, handleSearch) {
//     const container = document.querySelector(containerSelector);

//     // Créer la liste déroulante
//     const dropdownMenu = document.createElement('div');
//     dropdownMenu.classList.add('dropdown-menu');
//     dropdownMenu.style.display = 'none'; // Cacher la liste déroulante initialement

//     // Créer la barre de recherche
//     const searchBar = document.createElement('input');
//     searchBar.type = 'text';
//     searchBar.classList.add('form-control', 'mb-2', 'search-bar', 'show'); // Rendre la barre de recherche initialement visible
//     searchBar.placeholder = 'Rechercher...';
//     searchBar.addEventListener('input', (event) => {
//         const searchText = event.target.value.toLowerCase();
//         handleSearch(searchText, uniqueItems); // Appeler la fonction handleSearch avec le texte de recherche
//     });

//     // Ajouter la barre de recherche à la liste déroulante
//     dropdownMenu.appendChild(searchBar);

//     uniqueItems.forEach(item => {
//         const menuItem = document.createElement('button');
//         menuItem.classList.add('dropdown-item');
//         menuItem.type = 'button';
//         menuItem.textContent = item;

//         menuItem.addEventListener('click', () => {
//             // Ajouter ou supprimer la classe dropdown-menu-selected au clic
//             menuItem.classList.toggle('dropdown-menu-selected');
//             handleSelection(item);
//             dropdownMenu.style.display = 'none'; // Fermer la liste déroulante après la sélection
//         });

//         dropdownMenu.appendChild(menuItem);
//     });

//     // Ajouter la liste déroulante au conteneur
//     container.appendChild(dropdownMenu);

//     // Gérer l'ouverture/fermeture de la liste déroulante
//     container.addEventListener('click', (event) => {
//         const dropdownArrow = event.target.closest('.dropdown-arrow');
//         if (dropdownArrow) {
//             const isOpen = dropdownMenu.style.display === 'block';
//             dropdownMenu.style.display = isOpen ? 'none' : 'block';
//             dropdownArrow.classList.toggle('rotate', !isOpen);
//             if (!isOpen) {
//                 searchBar.focus(); // Mettre le focus sur la barre de recherche lorsque la liste déroulante est ouverte
//             }
//         }
//     });

//     // Fermer le menu déroulant si on clique en dehors
//     document.addEventListener('click', (event) => {
//         if (!container.contains(event.target)) {
//             dropdownMenu.style.display = 'none';
//         }
//     });
// }

// // Fonction appelée lors de la recherche dans la barre de recherche
// export function handleSearch(searchText, uniqueItems) {
//     // ajouter la logique de recherche ici en fonction du texte de recherche
//     // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
//     const searchTextLowerCase = searchText.toLowerCase();

//     // Sélectionner tous les éléments de la liste déroulante que vous souhaitez filtrer
//     const dropdownItems = document.querySelectorAll('.dropdown-item');

//     // Parcourir chaque élément de la liste déroulante
//     dropdownItems.forEach(item => {
//         // Récupérer le texte de chaque élément
//         const itemText = item.textContent.toLowerCase();

//         // Vérifier si le texte de l'élément contient le texte de recherche
//         if (itemText.includes(searchTextLowerCase)) {
//             // Afficher l'élément s'il correspond au texte de recherche
//             item.style.display = 'block';
//         } else {
//             // Masquer l'élément s'il ne correspond pas au texte de recherche
//             item.style.display = 'none';
//         }
//     });
// }
