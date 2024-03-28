const RenderFactory = {
    // Fonction pour afficher les recettes sur la page HTML
    renderRecipes: function (recipes) {
        const cardContainer = document.querySelector('.card-container');
        let row = document.createElement('div');
        row.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');

        recipes.forEach((recipe, index) => {
            if (index % 3 === 0 && index !== 0) {
                cardContainer.appendChild(row);
                row = document.createElement('div');
                row.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');
            }

            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                <div class="card mb-4" style="border-radius: 21px;">
                    <img src="assets/Photos+P7+JS+Les+petits+plats/Photos/${recipe.image}" class="card-img-top img-fluid ImgRecipe" alt="image du plat">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.name}</h5>
                        <p class="card-text">RECETTE</p>
                        <p class="card-text">${recipe.description}</p>
                        <p class="card-text">INGREDIENTS :</p>
                        <ul class="list-unstyled">
                            ${recipe.ingredients.map(ingredient => `
                                <li>${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
            row.appendChild(card);
        });

        cardContainer.appendChild(row);
    }
};

export default RenderFactory;
