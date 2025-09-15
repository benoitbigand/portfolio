// Script de gestion d'opacité de la barre de navigation
const navbar = document.getElementById("navbar");
const baseOpacity = 1;
const scrollOpacity = 0.5;
            
// Vérification de l'opacité au scroll
window.addEventListener("scroll", handleScroll);

// Fonction qui ajuste l'opacité
function handleScroll() {
    if (window.scrollY > 35) {
        navbar.style.opacity = scrollOpacity;
    } else {
        navbar.style.opacity = baseOpacity;
    }
}
        
// Vérification de l'opacité au survol de la souris
navbar.addEventListener("mouseenter", () => {
navbar.style.opacity = baseOpacity;
});
navbar.addEventListener("mouseleave", handleScroll);

// Initialisation au chargement de la page

handleScroll();
