document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const sidenav = document.querySelector(".sidenav");

  toggleButton.addEventListener("click", () => {
    sidenav.classList.toggle("open");
    toggleButton.classList.toggle("active"); // Legger til/fjerner 'active' klassen
    toggleButton.textContent = sidenav.classList.contains("open") ? "×" : "☰";
  });
});
