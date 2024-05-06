const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Animation", "Fantasy", "Documentary"];

const genreDisplay = document.getElementById("genreDisplay");
const genreBtn = document.getElementById("genreBtn");

genreBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * genres.length);
  const randomGenre = genres[randomIndex];
  
  // Add fullscreen class to genreDisplay
  genreDisplay.classList.add("fullscreen");
  genreDisplay.textContent = randomGenre;
  genreDisplay.style.fontSize = "100px"; // Increase font size when in fullscreen
  
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