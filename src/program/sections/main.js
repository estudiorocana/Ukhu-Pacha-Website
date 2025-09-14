// MAIN

export function Main() {
  return `
    <main id="main-id">
      <canvas id="canvas-id"></canvas>
      <div id="main-content">
        <h2 id="main-title">INFORMACIÓN GENERAL</h2>
        <div id="text-carousel">
          <p class="carousel-text" id="carrusel1">
            PAGINA INFORMATIVA REFERENTE A UKHU PACHA, PROPUESTA DE VIDEOJUEGO PERUANO POSTULANTE A PRE-PRODUCCIÓN EN EL CONCURSO DE VIDEOJUEGO DE LA DAFO 2025.
          </p>

          <p class="carousel-text" id="carrusel2">
            PAGINA INFORMATIVA REFERENTE A UKHU PACHA, PROPUESTA DE VIDEOJUEGO PERUANO POSTULANTE A PRE-PRODUCCIÓN EN EL CONCURSO DE VIDEOJUEGO DE LA DAFO 2025.
          </p>

          <p class="carousel-text" id="carrusel3">
            PAGINA INFORMATIVA REFERENTE A UKHU PACHA, PROPUESTA DE VIDEOJUEGO PERUANO POSTULANTE A PRE-PRODUCCIÓN EN EL CONCURSO DE VIDEOJUEGO DE LA DAFO 2025.
          </p>

          <!-- Botones -->
          <button class="carousel-btn prev"><</button>
          <button class="carousel-btn next">></button>
          
        </div>

         <!-- Puntos -->
        <div id="carousel-dots"></div>

      </div>       
    </main>
  `
}

export function MainEvents() {
  const texts = document.querySelectorAll(".carousel-text");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dotsContainer = document.querySelector("#carousel-dots");

  let index = 0;
  let interval;

  // Crear dots dinámicamente
  texts.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      showText(index);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll(".dot");

  function showText(i) {
    texts.forEach((t, idx) => {
      t.style.opacity = idx === i ? "1" : "0";
    });
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === i);
    });
  }

  function nextText() {
    index = (index + 1) % texts.length;
    showText(index);
  }

  function prevText() {
    index = (index - 1 + texts.length) % texts.length;
    showText(index);
  }

  function startCarousel() {
    showText(index);
    interval = setInterval(nextText, 50000);
  }

  function resetInterval() {
    clearInterval(interval);
    startCarousel();
  }

  // Exportar función para usar en NavEvents
  window.resetCarousel = function () {
    index = 0;
    showText(index);
    resetInterval();
  };

  // Eventos botones
  nextBtn.addEventListener("click", () => {
    nextText();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevText();
    resetInterval();
  });

  startCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active"); // animación hamburguesa
      navMenu.classList.toggle("active");   // muestra/oculta menú
    });
  }

});