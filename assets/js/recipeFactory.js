// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Charger les données JSON du fichier recipes.js
    fetch('assets/json/recipes.json')
        .then(response => response.json())
        .then(data => {
            // Récupérer le conteneur des cartes
            const cardContainer = document.querySelector('.card-container');

            // Parcourir les données
            data.forEach(recipe => {
                // Créer un élément de carte
                const card = document.createElement('div');
                card.classList.add('col-4');
                card.innerHTML = `
                    <div class="card mb-4 me-md-3">
                        <img src="assets/Photos+P7+JS+Les+petits+plats/Photos/${recipe.image}" class="card-img-top" alt="image du plat">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.name}</h5>
                            <p class="card-text">${recipe.description}</p>
                            <p class="card-text">Ingrédients :</p>
                            <ul class="list-unstyled">
                                ${recipe.ingredients.map(ingredient => `
                                    <li>${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                // Ajouter la carte au conteneur des cartes
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erreur de chargement des données :', error));
});
