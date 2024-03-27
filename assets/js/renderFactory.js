const RenderFactory = {
    // Fonction pour afficher les recettes sur la page HTML
    renderRecipes: function (recipes) {
        const cardContainer = document.querySelector('.card-container');

        recipes.forEach(recipe => {
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
            cardContainer.appendChild(card);
        });
    }
};

// Exporter le module pour une utilisation dans d'autres fichiers
export default RenderFactory;
