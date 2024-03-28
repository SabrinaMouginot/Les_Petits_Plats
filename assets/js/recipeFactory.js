const RecipeFactory = {
    // Fonction pour charger les données JSON des recettes
    loadRecipes: function () {
        return fetch('assets/json/recipes.json')
            .then(response => response.json());
    }
};

// Exporter le module pour une utilisation dans d'autres fichiers
export default RecipeFactory;