// Fonction pour obtenir une liste d'ingrédients uniques à partir des recettes
export function getUniqueIngredients(recipes) {
    let uniqueIngredientsSet = new Set(); // Utiliser un ensemble pour stocker les ingrédients uniques

    // Parcourir chaque recette pour extraire les ingrédients
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            uniqueIngredientsSet.add(ingredient.ingredient); // Ajouter chaque ingrédient à l'ensemble
        });
    });

    // Convertir l'ensemble en un tableau et le trier par ordre alphabétique
    let uniqueIngredientsArray = Array.from(uniqueIngredientsSet).sort((a, b) => a.localeCompare(b));

    return uniqueIngredientsArray;
}

export function getUniqueAppliances(recipes) {
    let uniqueAppliancesSet = new Set(); // Utiliser un ensemble pour stocker les appareils uniques

    // Parcourir chaque recette pour extraire les appareils
    recipes.forEach(recipe => {
        if (Array.isArray(recipe.appliance)) { // Vérifiez si appliance est un tableau
            recipe.appliance.forEach(appliance => {
                uniqueAppliancesSet.add(appliance); // Ajouter l'appareil de cette recette à l'ensemble
            });
        } else { // Si appliance n'est pas un tableau, ajoutez-le directement à l'ensemble
            uniqueAppliancesSet.add(recipe.appliance);
        }
    });

    // Convertir l'ensemble en un tableau et le trier par ordre alphabétique
    let uniqueAppliancesArray = Array.from(uniqueAppliancesSet).sort((a, b) => a.localeCompare(b));

    return uniqueAppliancesArray;
}
