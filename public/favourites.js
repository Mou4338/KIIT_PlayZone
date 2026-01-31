const favGrid = document.getElementById("favGrid");
const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

if (favourites.length === 0) {
  favGrid.innerHTML = "<p style='text-align:center;'>No favourites added yet ❤️</p>";
} else {
  favourites.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <iframe src="${game.preview}" loading="lazy"></iframe>
    <div class="overlay">
      <!-- Favourite Button -->
      <button class="fav-btn" title="Add to favourites">♡</button>
      <h2>${game.name}</h2>
      <p><strong>Category:</strong> ${game.category}</p>
      <p>${game.description}</p>
      <a class="play-btn" href="${game.link}" target="_blank">▶ Play Now</a>
    </div>
  `;

    favGrid.appendChild(card);
  });
}
