import RecipeFactory from './recipeFactory.js';
import { generateIngredientDropdown } from './filters/ingredientFilter.js';
import { generateApplianceDropdown } from './filters/applianceFilter.js';
import { generateUstensilDropdown } from './filters/ustensilFilter.js';


const tags = [];
let allRecipes; // Déclarer la variable globale allRecipes

// afficher les filtres sélectionnés
export function displayTags() {
    // Sélectionne les conteneurs pour chaque type de tag
    const ingredientContainer = document.querySelector('.selected-ingredient');
    const applianceContainer = document.querySelector('.selected-appliance');
    const ustensilContainer = document.querySelector('.selected-ustensil');

    // Vide les conteneurs précédents
    ingredientContainer.innerHTML = '';
    applianceContainer.innerHTML = '';
    ustensilContainer.innerHTML = '';

    // Parcours les tags pour chaque type et les ajoute aux conteneurs correspondants
    tags.forEach(tag => {
        const tagButton = document.createElement('button');
        tagButton.classList.add('btn', 'btn-tag', `btn-${tag.type}`);
        tagButton.textContent = tag.value;

        // Ajoute le tag au conteneur correspondant en fonction de son type
        if (tag.type === 'ingredient') {
            ingredientContainer.appendChild(tagButton);
        } else if (tag.type === 'appliance') {
            applianceContainer.appendChild(tagButton);
        } else if (tag.type === 'ustensil') {
            ustensilContainer.appendChild(tagButton);
        }
    });
}

// filtrer les recettes en fonction du texte de recherche saisi 
function filterRecipes(searchText) {
    // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
    const searchTextLowerCase = searchText.toLowerCase();

    // Filtrer les recettes en fonction du texte de recherche
    const filteredRecipes = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTextLowerCase) ||
        recipe.description.toLowerCase().includes(searchTextLowerCase) ||
        recipe.ingredients.some(ingredient =>
            ingredient.ingredient.toLowerCase().includes(searchTextLowerCase)
        )
    );

    // Effacer le contenu actuel des recettes affichées
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    // Afficher les recettes filtrées
    RecipeFactory.renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('#searchBar');
    const searchButton = document.querySelector('.loupe button'); // Sélectionnez le bouton de la loupe

    let searchText = ''; // Variable pour stocker le texte de recherche
    let filteredRecipes = []; // Variable pour stocker les recettes filtrées

    // Ajoutez un écouteur d'événements pour le clic sur le bouton de la loupe
    searchButton.addEventListener('click', function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        if (searchText !== '') { // Vérifiez si la barre de recherche n'est pas vide
            filterRecipes(searchText); // Filtrez les recettes avec le texte de recherche
        } else {
            // Si la barre de recherche est vide, réinitialisez l'affichage
            RecipeFactory.renderRecipes(allRecipes); // Affichez toutes les recettes
            filteredRecipes = []; // Réinitialisez la liste des recettes filtrées
        }
    });

    // Chargez les recettes et affichez-les initialement
    RecipeFactory.loadRecipes()
        .then(recipes => {
            allRecipes = recipes;
            filteredRecipes = recipes; // Initialisez la liste des recettes filtrées avec toutes les recettes

            RecipeFactory.renderRecipes(recipes);
            generateIngredientDropdown(recipes);
            generateApplianceDropdown(recipes);
            generateUstensilDropdown(recipes);

        })
        .catch(error => console.error('Erreur de chargement des données :', error));

    // Ajoutez un écouteur d'événements pour le changement de texte dans la barre de recherche
    searchBar.addEventListener('input', function (event) {
        searchText = event.target.value.trim(); // Mettez à jour le texte de recherche
        // // Réinitialisez la liste des recettes filtrées lorsque la barre de recherche est vidée
        // if (searchText === '') {
        //     filteredRecipes = []; // Réinitialisez les recettes filtrées
        // }
    });
});

export { tags };