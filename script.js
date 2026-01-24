const games = [
  {
    name: "Tic That Toe",
    category: "Puzzle",
    description: "A simple Tic Tac Toe game.. except the original name was taken, so I proudly present 'Tic That Toe' 😜. Play a quick match, challenge a friend, or just click around when you’re bored.",
    preview: " https://tic-that-toe.netlify.app/",
    link: " https://tic-that-toe.netlify.app/"
  },
  {
    name: "Memory Match game",
    category: "Puzzle",
    description: "A memory match game where we have to flip the card the match with another card.",
    preview: "https://memory-match-master-nu.vercel.app/",
    link: "https://memory-match-master-nu.vercel.app/"
  },
  {
    name: "Meteor Dodge",
    category: "Arcade",
    description: "Take control of a tiny spaceship and dodge a relentless shower of meteors in this fast-paced survival arcade. The longer you survive, the faster and more chaotic it gets — test your reflexes and aim for a high-score. Can you survive the meteor storm and outlast the night?",
    preview: "https://meteor-dodge-survival-84.vercel.app/",
    link: "https://meteor-dodge-survival-84.vercel.app/"
  },
  {
    name: "Endless-Street-Run",
    category: "Arcade",
    description: "Its a fast-paced arcade car game where quick reflexes and sharp focus are the only way to survive. Dodge oncoming traffic, adapt to increasing speed, and beat your own high score.",
    preview: "https://endless-street-run.vercel.app/",
    link: "https://endless-street-run.vercel.app/"
  },
  {
    name: "The CPU Destroyer",
    category: "Technical",
    description: "It does nothing crazy, doesn’t solve world hunger, and won’t make you rich…BUT it runs, it loads, and it didn’t crash (yet) 😌",
    preview: " https://host-project-j7qgmbr3b-asmit759s-projects.vercel.app/",
    link: " https://host-project-j7qgmbr3b-asmit759s-projects.vercel.app/"
  },
  {
    name: "Chapati-Chase",
    category: "Arcade",
    description: "'Chapati-Chase' is a fun kitchen runner where you dodge rolling chapatis as a chef using simple left, right, and jump controls.Collect butter power-ups, enjoy cartoon visuals and sounds, and beat your best score saved on the leaderboard.",
    preview: "https://chapati-chase-frenzy.vercel.app/",
    link: "https://chapati-chase-frenzy.vercel.app/"
  },
  {
    name: "Rap Matrix Quiz",
    category: "Quiz",
    description: "A memory match game where we have to flip the card the match with another card.",
    preview: "https://rap-guess-game.onrender.com/",
    link: "https://rap-guess-game.onrender.com/"
  },
  {
    name: "Drive Mad",
    category: "Arcade",
    description: "Its a fast-paced physics-based driving game where players navigate tricky platforms, ramps, and obstacles using precise control and timing. The goal is simple but challenging: keep your car balanced, survive insane jumps, and reach the finish without crashing.",
    preview: "https://carparkour.vercel.app/",
    link: "https://carparkour.vercel.app/"
  },
  {
    name: "Cute Chess",
    category: "Board",
    description: "A chess game where sometimes you might kill your King with your own piece 😭. Might be a bug or feature 🫠 apart from that works like a regular chess game.",
    preview: " https://cozy-chess.vercel.app/",
    link: " https://cozy-chess.vercel.app/"
  },
  {
    name: "Slap the Mosquito",
    category: "Arcade",
    description: "A fast, humor-based browser game where your goal is simple: slap as many mosquitoes as you can before time runs out. Each miss costs you a life, and your performance is tracked through score, accuracy, and combo streaks.",
    preview: "https://mosquito-game1-git-main-nirajs-projects-6e46d474.vercel.app/",
    link: "https://mosquito-game1-git-main-nirajs-projects-6e46d474.vercel.app/"
  },
  {
    name: "One jump - One life",
    category: "Puzzle",
    description: "Made to annoy people with low patience got a simple charge-based jump mechanic, with cool game levels like wind level, reverse gravity.",
    preview: "https://one-jump-one-life.vercel.app/",
    link: "https://one-jump-one-life.vercel.app/"
  },
  {
    name: "Stack Master",
    category: "Arcade",
    description: "A basic game where you drop moving blocks to stack them as high as possible. Perfectly aligned blocks stay, misaligned blocks get trimmed, and the game ends if you miss. Fast-paced and neon-styled, it’s simple, fun, and addictive!",
    preview: "https://stack-master-weld.vercel.app/",
    link: "https://stack-master-weld.vercel.app/"
  },
  {
    name: "Hostel Havoc",
    category: "Adventure",
    description: "'Hostel Havoc: Night Survival' is a stealth-survival game where you play a hostel student trying to survive nights after lights-out. Manage energy and fear, avoid wardens and dangers, collect resources, and survive increasingly intense nights until morning.",
    preview: "https://hostel-havoc-neon-night.vercel.app/",
    link: "https://hostel-havoc-neon-night.vercel.app/"
  },
  {
    name: "Royal Chess",
    category: "Board",
    description: "A Puzzle Hub which is a collection of five brain-teasing logic games including River Crossing, Lights Out, N Queens, Sliding Puzzle and Bridge Crossing, each with a timer.",
    preview: "https://indus-chess-saga.vercel.app/",
    link: "https://indus-chess-saga.vercel.app/"
  },
  {
    name: "Subway Dash",
    category: "Arcade",
    description: "'Subway Dash - 3D Endless Runner'. Dodge trains, collect coins, and dash through the subway in this exciting 3D endless runner.",
    preview: "https://subway-rush-frenzy.vercel.app/",
    link: "https://subway-rush-frenzy.vercel.app/"
  },
  {
    name: "Game Match",
    category: "Adventure",
    description: "Game Match is a swipe-based game discovery platform designed for effortless decision-making. Like Tinder for games, you simply swipe right on games you like and left on those you don’t, instantly building a personalized list of matches. Quick, fun, and addictive—Game Match makes finding your next game as enjoyable as playing it.",
    preview: "https://game-matcher-pro.vercel.app/",
    link: "https://game-matcher-pro.vercel.app/"
  },
  {
    name: "Arrow Smasher",
    category: "Sports",
    description: "'Arrow Smasher' - An Arrow shooting Game where the Targets are moving and we can adjust the difficulty.",
    preview: "https://arrow-aim.vercel.app/",
    link: "https://arrow-aim.vercel.app/"
  },
  {
    name: "Krazzy Eater",
    category: "Arcade",
    description: "'Krazzy Eater' - Basically The PacMan game but with bad logic and more Retro 🤌🏻✨",
    preview: "https://pixel-maze-mania.vercel.app/",
    link: "https://pixel-maze-mania.vercel.app/"
  },
  {
    name: "Echoes of Self",
    category: "Adventure",
    description: "'Echoes of Self' is a minimalist psychological horror mystery where you follow strange clues through a looping city; only to realize the truth you’re chasing is your own.",
    preview: "https://echoes-of-self.vercel.app/",
    link: "https://echoes-of-self.vercel.app/"
  },
  {
    name: "Word-Blast",
    category: "Puzzle",
    description: "The clock is ticking — and only your vocabulary can save you. Think fast, find the right word, pass the bomb, and survive before the 10-second timer runs out. Do you have what it takes to handle the pressure?",
    preview: "https://word-bomb-game-one.vercel.app/",
    link: "https://word-bomb-game-one.vercel.app/"
  },
  {
    name: "Echo Walker",
    category: "Adventure",
    description: "'Echo Walker' is a dark stealth-exploration game where sound is your vision. Use echo pulses to reveal the environment, but be careful—every noise can attract enemies. Simple controls, glowing visuals, and a tense sound-based mechanic make every step count.",
    preview: "https://echo-walker.vercel.app/",
    link: "https://echo-walker.vercel.app/"
  },
  {
    name: "Silent Sniper",
    category: "Action",
    description: "'Silent Sniper' is a first-person zombie shooting game where players aim, shoot, and survive through increasing difficulty levels. The goal is to eliminate zombies with accuracy while managing time, misses, and score.",
    preview: "https://silent-scope-zombie.vercel.app/",
    link: "https://silent-scope-zombie.vercel.app/"
  },
  {
    name: "Memory Labyrinth",
    category: "Puzzle",
    description: "'Memory Labyrinth' is a tile-based memory puzzle game where players must observe a hidden path and navigate through it before the tiles shuffle. Each level tests focus, recall ability, and timing as the maze changes dynamically, making it harder to remember the correct route.",
    preview: "https://memory-labyrinth.vercel.app/",
    link: "https://memory-labyrinth.vercel.app/"
  },
  {
    name: "Mirror Maze",
    category: "Adventure",
    description: "A puzzle game where you move one character, and the other decides to do the exact opposite. Your job is to somehow get both of them to their exits without losing your sanity. It’s basically teamwork with yourself. Good luck.",
    preview: "https://mirror-match-maze.vercel.app/",
    link: "https://mirror-match-maze.vercel.app/"
  },
  {
    name: "Coffee Runner",
    category: "Technical",
    description: "You’re a stressed-out coder surviving on coffee, vibes, and questionable life choices trying to escape the evil villain known as 'The Bug' .Jump over bugs, collect unlimited caffeine, and try not to rage-quit like you do during DSA practice!Every cup of coffee boosts your energyEvery bug destroys your soul just like real coding.",
    preview: "https://coffee-runner.vercel.app/",
    link: "https://coffee-runner.vercel.app/"
  },
  {
    name: "Tile Mania",
    category: "Puzzle",
    description: "'Tile Mania' is a colorful triple-match puzzle game with layered tiles and a 7-slot challenge tray. Featuring multiple modes, rewards, leaderboards, and smooth animations, it offers fun, fast-paced, and endlessly engaging gameplay.",
    preview: "https://tripletblast.vercel.app/",
    link: "https://tripletblast.vercel.app/"
  },
  {
    name: "Shroom Run The Dash",
    category: "Arcade",
    description: "'Shroom Run The Dash' delivers fast-paced, pixel-art endless running action where you guide a quirky mushroom hero through vibrant levels. Jump, dash and dodge enemies in one-tap arcade fun and perfect for quick mobile sessions with retro charm and high-score thrills.",
    preview: "https://shroom-run-the-dash.vercel.app/",
    link: "https://shroom-run-the-dash.vercel.app/"
  },
  {
    name: "Through the Shattered Glass",
    category: "Adventure",
    description: "Luna and Sol, two siblings, are pulled into a dark mystical world through a silver-glowing mirror. Facing eerie creatures and deadly mysteries, they must rely on each other to survive and uncover a path back home—or the truth behind it.",
    preview: "https://mirror-shards.vercel.app/",
    link: "https://mirror-shards.vercel.app/"
  },
  {
    name: "Calm Sudoku",
    category: "Puzzle",
    description: "'Calm Sudoku' - A simple and engaging Sudoku game, featuring clean design, intuitive controls, and multiple difficulty levels.",
    preview: "https://calm-sudoku.vercel.app/",
    link: "https://calm-sudoku.vercel.app/"
  },
  {
    name: "Brew Clues",
    category: "Quiz",
    description: "'Brew Clues' - Just a coffee guessing game",
    preview: "https://cozy-brew-guess.lovable.app",
    link: "https://cozy-brew-guess.lovable.app"
  },
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");

let current = "all";

function render() {
  grid.innerHTML = "";
  games
    .filter(g =>
      g.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (current === "all" || g.category === current)
    )
    .forEach(g => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<iframe src="${g.preview}"></iframe>
        <div class="overlay">
          <h2>${g.name}</h2>
          <p>${g.category}</p>
          <p>${g.description}</p>
          <a class="play-btn" href="${g.link}" target="_blank">▶ Play Now</a>
        </div>`;
      grid.appendChild(card);
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

render();
