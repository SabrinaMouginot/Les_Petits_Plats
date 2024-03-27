import RecipeFactory from './recipeFactory.js';
import RenderFactory from './renderFactory.js';
// Importez d'autres modules au besoin

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Charger les données JSON du fichier recipes.json en utilisant RecipeFactory
    RecipeFactory.loadRecipes()
        .then(recipes => {
            // Une fois les recettes chargées, les afficher en utilisant RenderFactory
            RenderFactory.renderRecipes(recipes);
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});
