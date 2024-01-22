const setPointerProperties = (element, x, y) => {
  const xp = (x / window.innerWidth).toFixed(2);
  const yp = (y / window.innerHeight).toFixed(2);

  element.style.setProperty('--x', x.toFixed(2));
  element.style.setProperty('--xp', xp);
  element.style.setProperty('--y', y.toFixed(2));
  element.style.setProperty('--yp', yp);
};

const syncPointer = ({ x: pointerX, y: pointerY }) => {
  setPointerProperties(document.documentElement, pointerX, pointerY);

  document.querySelectorAll('.header-button').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
  });





  document.querySelectorAll('.info [data-glow]').forEach((el) => {
    setPointerProperties(el, pointerX, pointerY);
});

// Nouvelles sections
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

document.body.addEventListener('pointermove', syncPointer);


// Ajoutez cette fonction dans votre script
const toggleDescription = (button, description) => {
  description.classList.toggle('open');
  button.classList.toggle('open');
  const isOpen = description.classList.contains('open');
  button.textContent = isOpen ? 'Masquer le descriptif' : 'Voir le descriptif';
};

// Ajoutez ces écouteurs d'événements à la fin de votre script
document.querySelectorAll('.toggle-button').forEach((button) => {
  button.addEventListener('click', function() {
      const job = this.closest('.job');
      job.classList.toggle('open');
  });
});


import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

if (!CSS.supports('animation-timeline: scroll()')) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set('.track__indicators', { aspectRatio: '7 / 1' });

  const indicators = document.querySelectorAll('.indicator');
  const articles = document.querySelectorAll('article');
  
  const scrollToSection = (index) => {
    const scrollX = articles[index].offsetLeft;
    window.scrollTo({
      left: scrollX,
      behavior: 'smooth'
    });
  };
  
}
