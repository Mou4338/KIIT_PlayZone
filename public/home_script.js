const popularGames = [
  {
    name: "Tic That Toe",
    category: "Puzzle",
    description: "A simple Tic Tac Toe game.. except the original name was taken, so I proudly present 'Tic That Toe' 😜. Play a quick match, challenge a friend, or just click around when you’re bored.",
    preview: " https://tic-that-toe.netlify.app/",
    link: " https://tic-that-toe.netlify.app/"
  },
  {
    name: "Hostel Havoc",
    category: "Adventure",
    description: "'Hostel Havoc: Night Survival' is a stealth-survival game where you play a hostel student trying to survive nights after lights-out. Manage energy and fear, avoid wardens and dangers, collect resources, and survive increasingly intense nights until morning.",
    preview: "https://hostel-havoc-neon-night.vercel.app/",
    link: "https://hostel-havoc-neon-night.vercel.app/"
  },
  {
    name: "Arrow Smasher",
    category: "Sports",
    description: "'Arrow Smasher' - An Arrow shooting Game where the Targets are moving and we can adjust the difficulty.",
    preview: "https://arrow-aim.vercel.app/",
    link: "https://arrow-aim.vercel.app/"
  },
];

const grid = document.getElementById("grid");

popularGames.forEach(game => {
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

  grid.appendChild(card);

  const favBtn = card.querySelector(".fav-btn");

  favBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  let favs = getFavourites();
  const exists = favs.find(g => g.name === game.name);

  if (exists) {
    favs = favs.filter(g => g.name !== game.name);
    favBtn.classList.remove("active");
    favBtn.textContent = "♡";
  } else {
    favs.push(game);
    favBtn.classList.add("active");
    favBtn.textContent = "❤";
  }

  saveFavourites(favs);
});

});


const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    const selectedCategory = card.dataset.category;
    console.log("Selected category:", selectedCategory);
  });
});

function getFavourites() {
  return JSON.parse(localStorage.getItem("favourites")) || [];
}

function saveFavourites(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
