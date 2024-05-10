const genres = [
  "Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
  "Romance", "Thriller", "Animation", "Fantasy", 
  "Documentary", "Adventure", "Mystery", "Crime", 
  "Family", "Music", "Western", "War", "History", 
  "Biography", "Sport", "Musical", "Superhero"
];

const genreDisplay = document.getElementById("genreDisplay");
const genreBtn = document.getElementById("genreBtn");

genreBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * genres.length);
  const randomGenre = genres[randomIndex];
  
  genreDisplay.classList.add("fullscreen");
  genreDisplay.textContent = randomGenre;
  genreDisplay.style.fontSize = "100px"; // Increase font size when in fullscreen
  genreDisplay.style.color = "white"; // Change text color
  
  // Clear existing genre classes (if any)
  genreDisplay.className = "genre-display";
  
  // Trigger confetti animation
  triggerConfetti();
});

// Add event listener to genreDisplay to shrink when clicked outside of fullscreen
genreDisplay.addEventListener("click", () => {
  if (genreDisplay.classList.contains("fullscreen")) {
    genreDisplay.classList.remove("fullscreen");
    genreDisplay.textContent = "";
    genreDisplay.style.fontSize = "200px"; // Reset font size when not in fullscreen
  }
});

// Function to trigger confetti animation
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.6 }
  });
} 