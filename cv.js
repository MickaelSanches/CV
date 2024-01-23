// Définition de la fonction setPointerProperties qui ajuste les propriétés de position en fonction des coordonnées du curseur
const setPointerProperties = (element, x, y) => {
  // Calcul des ratios par rapport à la taille de la fenêtre
  const xp = (x / window.innerWidth).toFixed(2);
  const yp = (y / window.innerHeight).toFixed(2);

  // Configuration des propriétés de position pour l'élément donné
  element.style.setProperty('--x', x.toFixed(2));
  element.style.setProperty('--xp', xp);
  element.style.setProperty('--y', y.toFixed(2));
  element.style.setProperty('--yp', yp);
};

// Fonction syncPointer qui synchronise la position du curseur sur différents éléments de la page
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  // Synchronisation de la position du curseur sur le document
  setPointerProperties(document.documentElement, pointerX, pointerY);

  // Synchronisation de la position du curseur sur les boutons de la barre de navigation
  document.querySelectorAll('.header-button').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation de la position du curseur sur les éléments avec attribut data-glow dans la section info
  document.querySelectorAll('.info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation de la position du curseur sur les éléments avec attribut data-glow dans la section formation
  document.querySelectorAll('.formation info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation de la position du curseur sur les éléments avec attribut data-glow dans la section compétences
  document.querySelectorAll('.competences info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation de la position du curseur sur les éléments avec attribut data-glow dans la section projets
  document.querySelectorAll('.projets info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });

  // Synchronisation de la position du curseur sur les éléments avec attribut data-glow dans la section intérêts
  document.querySelectorAll('.interets info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });
};

// Écouteur d'événement pour mettre à jour la position du curseur lorsqu'il se déplace
document.body.addEventListener('pointermove', syncPointer);

// Fonction toggleDescription pour basculer l'ouverture/fermeture de la description d'un job
const toggleDescription = (button, description) => {
  // Basculement des classes pour montrer ou cacher la description
  description.classList.toggle('open');
  button.classList.toggle('open');

  // Vérification de l'état actuel de la description
  const isOpen = description.classList.contains('open');

  // Modification du texte du bouton en fonction de l'état de la description
  button.textContent = isOpen ? 'Masquer le descriptif' : 'Voir le descriptif';
};

// Écouteurs d'événement pour chaque bouton de bascule dans la section des jobs
document.querySelectorAll('.toggle-button').forEach((button) => {
  button.addEventListener('click', function () {
    // Recherche de l'élément job parent du bouton et bascule de la classe 'open'
    const job = this.closest('.job');
    job.classList.toggle('open');
  });
});


// Ajout d'un écouteur d'événement pour le défilement avec les touches de direction gauche/droite
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    // Décrémentation de l'index de la section actuelle, avec une valeur minimale de 0
    currentSection = Math.max(0, currentSection - 1);

    // Défilement vers la nouvelle section
    scrollToSection(currentSection);
  } else if (e.key === 'ArrowRight') {
    // Incrémentation de l'index de la section actuelle, avec une valeur maximale égale au nombre total d'articles
    currentSection = Math.min(articles.length - 1, currentSection + 1);

    // Défilement vers la nouvelle section
    scrollToSection(currentSection);
  }
});

