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

        // Filtrer et afficher les recettes à chaque changement de tag
        filterRecipes(document.querySelector('#searchBar').value);

        // Créer l'élément de la croix de fermeture
        const closeButton = document.createElement('span');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = '&times;'; // Code HTML pour le symbole "×"

        // Ajouter la croix de fermeture au tag
        tagButton.appendChild(closeButton);
    });
}

// Fonction pour filtrer les recettes en fonction des tags sélectionnés
function filterRecipesByTags(recipes) {
    // Si aucun tag n'est sélectionné, retournez toutes les recettes
    if (tags.length === 0) {
        return recipes;
    }

    // Filtrer les recettes en fonction des tags sélectionnés
    return recipes.filter(recipe => {
        // Vérifiez si tous les tags sont présents dans la recette
        return tags.every(tag => {
            if (tag.type === 'ingredient') {
                return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === tag.value.toLowerCase());
            } else if (tag.type === 'appliance') {
                return recipe.appliance.toLowerCase() === tag.value.toLowerCase();
            } else if (tag.type === 'ustensil') {
                return recipe.ustensils.some(ustensil => ustensil.toLowerCase() === tag.value.toLowerCase());
            }
        });
    });
}

// filtrer les recettes en fonction du texte de recherche saisi 
function filterRecipes(searchText) {
    // Convertir le texte de recherche en minuscules pour une correspondance insensible à la casse
    const searchTextLowerCase = searchText.toLowerCase();

    // Filtrer les recettes en fonction du texte de recherche
    let filteredRecipes = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTextLowerCase) ||
        recipe.description.toLowerCase().includes(searchTextLowerCase) ||
        recipe.ingredients.some(ingredient =>
            ingredient.ingredient.toLowerCase().includes(searchTextLowerCase)
        )
    );

    // Filtrer les recettes en fonction des tags sélectionnés
    filteredRecipes = filterRecipesByTags(filteredRecipes);

    // Effacer le contenu actuel des recettes affichées
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    // Afficher les recettes filtrées
    RecipeFactory.renderRecipes(filteredRecipes);
    displayRecipesNumber(filteredRecipes.length);
    generateIngredientDropdown(filteredRecipes);
    generateApplianceDropdown(filteredRecipes);
    generateUstensilDropdown(filteredRecipes);
}

function displayRecipesNumber(length) {
    // Sélectionner l'élément où afficher le nombre total de recettes
    const totalRecipesElement = document.getElementById('totalRecipesCount');

    // Afficher le nombre total de recettes dans l'élément
    totalRecipesElement.textContent = `${length} recette(s)`;
}

document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Charger les recettes et afficher initialement
        const recipes = await RecipeFactory.loadRecipes();
        allRecipes = recipes;
        RecipeFactory.renderRecipes(allRecipes);
        displayRecipesNumber(allRecipes.length);
        generateIngredientDropdown(allRecipes);
        generateApplianceDropdown(allRecipes);
        generateUstensilDropdown(allRecipes);
    } catch (error) {
        console.error('Erreur lors du chargement des recettes :', error);
    }

    const searchBar = document.querySelector('#searchBar');
    const searchButton = document.querySelector('.loupe button');

    let searchText = '';

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        filterRecipes(searchText);
    });

    searchBar.addEventListener('input', function (event) {
        searchText = event.target.value.trim();
        filterRecipes(searchText);
    });
});

export { tags };