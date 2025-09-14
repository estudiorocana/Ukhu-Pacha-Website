// LOGO

import logo_img from '../../img/logo/logo.png';

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.75 15.5a9 9 0 1 1-9-13 7 7 0 0 0 9 13z"/>
  </svg>
`;

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/>
    <g stroke="currentColor" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="23"/>
      <line x1="1" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="23" y2="12"/>
      <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
      <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
      <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
      <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
    </g>
  </svg>
`;

export function Logo() { 
  return `
    <section id="logo-id">      
    <button id="dark-toggle">${moonIcon}</button>
      <img src=${logo_img} alt="Logo de Estudio Rocaña" id="logo-img">
    </section>
  `;
};

export function LogoEvents() {
  document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("dark-toggle");

    btn.addEventListener("click", () => {
      
      const isMoon = btn.innerHTML.includes("path");

      btn.innerHTML = moonIcon;

      if (isMoon) {
        btn.innerHTML = sunIcon;
        document.body.classList.add("dark-mode");

        if (window.updateColors) {
          window.updateColors(0xffffff, 0x000000); // estrellas blancas, fondo negro
        }
      } else {
        btn.innerHTML = moonIcon;
        document.body.classList.remove("dark-mode");

        if (window.updateColors) {
          window.updateColors(0x000000, 0xffffff); // estrellas negras, fondo blanco
        }
      }

    });
  });
}