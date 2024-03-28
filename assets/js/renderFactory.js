const RenderFactory = {
    // Fonction pour afficher les recettes sur la page HTML
    renderRecipes: function (recipes) {
        const cardContainer = document.querySelector('.card-container');
        let row = document.createElement('div');
        row.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4', 'mb-5');

        recipes.forEach((recipe, index) => {
            if (index % 3 === 0 && index !== 0) {
                cardContainer.appendChild(row);
                row = document.createElement('div');
                row.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4', 'mb-5');
            }

            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                <div class="card h-100">
                    <img src="assets/Photos+P7+JS+Les+petits+plats/Photos/${recipe.image}" class="card-img-top img-fluid ImgRecipe" alt="image du plat">
                    <div class="card-body">
                        <h5 class="card-title mt-4">${recipe.name}</h5>
                        <p class="card-text mt-4">RECETTE</p>
                        <p class="card-text">${recipe.description}</p>
                        <p class="card-text mt-4">INGREDIENTS</p>
                        <div class="row">
                            <div class="col">
                                <ul class="list-unstyled">
                                    ${recipe.ingredients.slice(0, Math.ceil(recipe.ingredients.length / 2)).map(ingredient => `
                                        <li  class="fw-bold">${ingredient.ingredient}</li>  
                                        <li  class="mb-4">${ingredient.quantity !== undefined ? ingredient.quantity : ''} ${ingredient.unit !== undefined ? ingredient.unit : ''}</li>
                                    `).join('')}
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-unstyled">
                                    ${recipe.ingredients.slice(Math.ceil(recipe.ingredients.length / 2)).map(ingredient => `
                                        <li class="fw-bold">${ingredient.ingredient}</li>  
                                        <li class="mb-4">${ingredient.quantity !== undefined ? ingredient.quantity : ''} ${ingredient.unit !== undefined ? ingredient.unit : ''}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            row.appendChild(card);
        });

        cardContainer.appendChild(row);
    }
};

export default RenderFactory;
