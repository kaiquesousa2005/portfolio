document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500); // Tempo para a transição de opacidade
  }, 1100); // Tempo total do carregamento
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".animate");

  const handleScrollAnimation = () => {
    animatedSections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Ativar para seções visíveis no início
});

