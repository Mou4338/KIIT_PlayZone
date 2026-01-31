const grid = document.getElementById("grid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");

let current = "all";

function render() {
  grid.innerHTML = "";

  const favourites = getFavourites();

  games
    .filter(g =>
      g.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (current === "all" || g.category === current)
    )
    .forEach(g => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <iframe src="${g.preview}" loading="lazy"></iframe>
        <div class="overlay">
          <button class="fav-btn">♡</button>
          <h2>${g.name}</h2>
          <p>${g.category}</p>
          <p>${g.description}</p>
          <a class="play-btn" href="${g.link}" target="_blank">▶ Play Now</a>
        </div>
      `;
      grid.appendChild(card);

      const favBtn = card.querySelector(".fav-btn");
      if (favourites.find(f => f.name === g.name)) {
        favBtn.classList.add("active");
        favBtn.textContent = "❤";
      }
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        let favs = getFavourites();
        const exists = favs.find(f => f.name === g.name);

        if (exists) {
          favs = favs.filter(f => f.name !== g.name);
          favBtn.classList.remove("active");
          favBtn.textContent = "♡";
        } else {
          favs.push(g);
          favBtn.classList.add("active");
          favBtn.textContent = "❤";
        }

        saveFavourites(favs);
      });
    });
}

search.addEventListener("input", render);
buttons.forEach(b => {
  b.onclick = () => {
    buttons.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    current = b.dataset.cat;
    render();
  };
});

function getFavourites() {
  return JSON.parse(localStorage.getItem("favourites")) || [];
}

function saveFavourites(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}

render();


