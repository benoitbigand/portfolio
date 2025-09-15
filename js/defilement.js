// Script de défilement autommatique de la page
document.querySelectorAll('a.scroll-link').forEach(link => { // Vérifie les liens
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le saut instantané

        const targetId = this.getAttribute('href').substring(1); // Détermine le lien
        const targetElement = document.getElementById(targetId); // Récupère l'ancre
        if (!targetElement) return;

        const startPosition = window.scrollY;
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
        const duration = 1000; // Durée de l'animation en ms
        let startTime = null;

// Fonction d'easing (ease-in-out)
        function easeInOut(t) {
        return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
        }
                    
// Fonction d'animation de la page
    function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOut(progress);
                
// Détermine l'animation avec les calculs précédents
    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (timeElapsed < duration) {
    requestAnimationFrame(animateScroll);
    }
        
    }
            
// Initialisation au chargement de la page
    requestAnimationFrame(animateScroll);
            
    });
        
});