// Fonction pour définir les propriétés liées au pointeur
const setPointerProperties = (element, x, y) => {
  // Calcul des coordonnées normalisées entre 0 et 1
  const xp = (x / window.innerWidth).toFixed(2);
  const yp = (y / window.innerHeight).toFixed(2);

  // Définition des propriétés CSS personnalisées pour le déplacement du pointeur
  element.style.setProperty('--x', x.toFixed(2));
  element.style.setProperty('--xp', xp);
  element.style.setProperty('--y', y.toFixed(2));
  element.style.setProperty('--yp', yp);
};

// Fonction pour synchroniser le pointeur avec les éléments spécifiques
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  // Synchronisation des propriétés du pointeur avec le document
  setPointerProperties(document.documentElement, pointerX, pointerY);

  // Synchronisation avec les boutons de la barre de navigation
  document.querySelectorAll('.header-button').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation avec les éléments marqués pour le lueur
  document.querySelectorAll('.info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation avec les nouvelles sections (formation, compétences, projets, intérêts)
  document.querySelectorAll('.formation info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  document.querySelectorAll('.competences info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  document.querySelectorAll('.projets info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  document.querySelectorAll('.interets info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });
};

// Ajout d'un écouteur d'événement pour le mouvement du pointeur
document.body.addEventListener('pointermove', syncPointer);

// Fonction pour basculer la visibilité de la description
const toggleDescription = (button, description) => {
  // Basculement des classes pour la visibilité
  description.classList.toggle('open');
  button.classList.toggle('open');
  const isOpen = description.classList.contains('open');
  // Mise à jour du texte du bouton en fonction de la visibilité
  button.textContent = isOpen ? 'Masquer le descriptif' : 'Voir le descriptif';
};

// Ajout d'écouteurs d'événements pour les boutons de basculement
document.querySelectorAll('.toggle-button').forEach((button) => {
  button.addEventListener('click', function() {
    const job = this.closest('.job');
    job.classList.toggle('open');
  });
});

// Import de la bibliothèque GSAP pour les animations
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

// Vérification de la prise en charge de l'animation par défilement
if (!CSS.supports('animation-timeline: scroll()')) {
  // Enregistrement du plugin ScrollTrigger de GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Initialisation des indicateurs de défilement
  gsap.set('.track__indicators', { aspectRatio: '7 / 1' });

  // Sélection des indicateurs et des articles pour la section
  const indicators = document.querySelectorAll('.indicator');
  const articles = document.querySelectorAll('article');
  let currentSection = 0;

  // Fonction pour faire défiler jusqu'à la section correspondante
  const scrollToSection = (index) => {
    const scrollX = articles[index].offsetLeft;
    window.scrollTo({
      left: scrollX,
      behavior: 'smooth'
    });
  };

  // Ajout des écouteurs d'événements pour les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      scrollToSection(index);
    });
  });

  // Fonction pour faire défiler avec les flèches du clavier
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentSection = Math.max(0, currentSection - 1);
      scrollToSection(currentSection);
    } else if (e.key === 'ArrowRight') {
      currentSection = Math.min(articles.length - 1, currentSection + 1);
      scrollToSection(currentSection);
    }
  });
}

