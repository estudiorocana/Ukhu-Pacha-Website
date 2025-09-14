// NAV

import itch_logo from '../../img/svg/itch.svg'; 

export function Nav() {
  return `
  <nav id="navbar">
  
    <div id="nav-left">
      <!-- Botón hamburguesa (aparece en mobile) -->
      <button id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Menú principal -->
      <ul id="nav-menu">
        <li>Inicio<i class="fas fa-angle-down"></i>
          <ul>
            <li><a href="#" data-section="Información">Información</a></li>
          </ul>
        </li>
        <li>Trasfondo<i class="fas fa-angle-down"></i>
          <ul>
            <li><a href="#" data-section="Historia">Historia</a></li>
            <li><a href="#" data-section="Concepto">Concepto</a></li>
          </ul>
        </li>
        <li>Mécanicas<i class="fas fa-angle-down"></i>
          <ul>
            <li><a href="#" data-section="Principal">Principal</a></li>
            <li><a href="#" data-section="Atributos">Atributos</a></li>
          </ul>
        </li>
        <li>Referencias<i class="fas fa-angle-down"></i>
          <ul>
            <li><a href="#" data-section="Videojuegos">Videojuegos</a></li>
            <li><a href="#" data-section="Audiovisuales">Audiovisuales</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Iconos a la derecha (los mantengo iguales que tu HTML) -->
    <div id="nav-icons">

      <!-- Github -->    
      <a href="https://github.com/estudiorocana" target="_blank" class="nav-icon" aria-label="Github"> <svg fill="currentColor" width="1.6rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1""> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"> </path> </g> </g> </g> </svg> </a>
      
      <!-- Itch -->
      <a href="https://rocana.itch.io/" target="_blank" class="nav-icon" rel="noopener noreferrer" aria-label="Itch.io"> <svg fill="currentColor" width="1.6rem" viewBox="0 0 245.37069 220.73612" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"> <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z"/> </svg> </a>
      
      <!-- Instagram -->
      <a href="https://www.instagram.com/estudiorocana/" target="_blank" rel="noopener noreferrer" class="nav-icon" aria-label="Instagram"> <svg fill="currentColor" width="1.8rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"> <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"/> </svg> </a>
      
      <!-- YouTube -->
      <a href="https://www.youtube.com/@EstudioRocaña" target="_blank" rel="noopener noreferrer" class="nav-icon" aria-label="YouTube"> <svg fill="currentColor"width="1.8rem" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path> </g> </g> </g> </svg> </a>

    </div>
  </nav>
  `
};

export function NavEvents() {
  
  const nav = document.querySelector("#navbar");  
  
  const mainTitle = document.querySelector("#main-title");

  const carrusel1 = document.querySelector("#carrusel1");
  const carrusel2 = document.querySelector("#carrusel2");
  const carrusel3 = document.querySelector("#carrusel3");

  const heroTitle = document.querySelector("#hero-title");
  const heroSub = document.querySelector("#hero-sub");

  nav.addEventListener("click", (event) => {

    const link = event.target.closest("a");

    if (!link) return;
    if (link.classList.contains("nav-icon") || link.target === "_blank") return;    

    event.preventDefault();

    const section = link.textContent.trim();
    
    switch (section) {
      
      case "Información":
        heroTitle.textContent = "UKHU PACHA";
        heroSub.textContent = "INFORMACIÓN GENERAL DEL PROYECTO";
        
        mainTitle.textContent = "DATOS GENERALES";
        
        carrusel1.textContent = "PAGINA INFORMATIVA REFERENTE A UKHU PACHA, PROPUESTA DE VIDEOJUEGO PERUANO POSTULANTE A PRE-PRODUCCIÓN EN EL CONCURSO DE VIDEOJUEGO DE LA DAFO 2025.";
        carrusel2.textContent = "Ukhu Pacha, una aventura 2D que combina plataformas con elementos de rol, metroidvania, rompecabezas y aventura gráfica. Está dirigida a un público internacional de 14 a 52 años, especialmente a jugadores de plataformas y metroidvanias, amantes de narrativas profundas, decisiones con impacto y múltiples finales, así como a consumidores de sci-fi en literatura, cine y series. Su propuesta se distingue por fusionar ciencia ficción y estética retrofuturista inspirada en la cultura andina y peruana, ofreciendo una experiencia única donde la exploración, la narrativa y la elección del camino del jugador son el eje central."
        carrusel3.textContent = "El juego tedra desarrollo en Unity 6, elegido por su rendimiento, flexibilidad y soporte multiplataforma, con proyección a un lanzamiento inicial en Steam. El motor ofrece un renderizado optimizado (URP/HDRP) ideal para una dirección artística estilizada, herramientas avanzadas de animación (Animator, Rigging 2D, Timeline) para personajes y cinemáticas, un sistema de audio dinámico que integra música y efectos personalizados, y UI flexible para interfaces inmersivas, garantizando así calidad visual, narrativa interactiva y jugabilidad fluida en un proyecto que mezcla plataformas 2D con elementos de RPG y aventura gráfica.";
        
        if (window.resetCarousel) window.resetCarousel();
        break;        
        
      case "Historia":
        heroTitle.textContent = "HISTORIA";
        heroSub.textContent = "NARRATIVA DEL JUEGO";  
        
        mainTitle.textContent = "EL RELATO DE UKHU PACHA";
          
        carrusel1.textContent = "Es el año 4XXX un futuro distante donde la humanidad se ha expandido por las estrellas, a través de muchas olas migratorias y donde las múltiples colonias han tenido momentos de auge y declive en distintos grados de aislamiento. En este contexto, elementos culturales que ahora son minoritarios se han redescubierto, propagado, recombinado, desaparecido y vueltos a redescubrir, por lo que los planetas, naves, culturas e idiomas reflejan materia cultural fuera de la cultura hegemónica occidental, incluyendo la cultura peruana y cultura andina en la historia desarrollada en el juego.";
        carrusel2.textContent = "La astronave colonizadora Stella Invicta, comandada por el almirante Lord Maledicto, tiene por misión encontrar y colonizar planetas desconocidos por la humanidad con su banco de datos biogéneticos para producir clones en masa. Tras pasar cerca de una misteriosa luna llamada Ukhu Pacha, la Stella Invicta cayó bajo el influjo de una anomalía espacial que causó que se estrelle sobre la superficie y donde solo Maledicto y su Primer Oficial logran sobrevivir al impacto.";
        carrusel3.textContent = "Lord Maledicto, demasiado orgulloso para ensuciarse las manos, crea a Tuki, un clon destinado a explorar Ukhu Pacha y conseguir los recursos para reparar la Stella Invicta. Sin embargo, al adentrarse en la luna maldita, Tuki se verá arrastrado a una aventura mucho mayor: forjar alianzas con habitantes y espíritus, recorrer biomas hostiles, descubrir la verdad sobre la anomalía espacial y enfrentar los siniestros planes de su propio creador, en una lucha por sobrevivir y decidir el destino del planeta...";
          
        if (window.resetCarousel) window.resetCarousel();
        break;
          
      case "Concepto":
        heroTitle.textContent = "CONCEPTO";
        heroSub.textContent = "DETRAS DEL PROYECTO";

        mainTitle.textContent = "CONCEPTUALIZACIÓN DE UKHU PACHA";
            
        carrusel1.textContent = "Ambientado en un mundo retrofuturista salpicado de elementos neo andinos y cultura pop peruana, tomaremos control de Tuki, un ser creado de manera artificial, a consecuencia del choque de su astronave la Stella Invicta, luego de ser atrapados por una misteriosa fuerza emanante de una luna conocida como Ukhu Pacha.Deberemos tomar diferentes caminos basados en los desafíos que vayamos escogiendo y el nivel de nuestras habilidades.";
        carrusel2.textContent = "Ukhu Pacha una luna rojiza y desolada, azotada por tormentas de arena, habitada por sombras hostiles y los ecos de los muertos. Entre restos de naves y ruinas ciclópeas sobreviven comunidades aisladas en biomas que ofrecen refugio y recursos. Antaño fue el centro de una avanzada civilización tecnológica y espiritual, dedicada a la construcción de naves, pero la corrupción y las guerras por sus recursos la llevaron al colapso. En ese conflicto, sus fuentes de poder fueron dañadas, provocando la anomalía que hoy atrae y estrella naves en su superficie.";
        carrusel3.textContent = "Con la misión de infiltrarnos en los diversos biomas y conseguir los repuestos necesarios para reparar la nave, el juego combina exploración, decisión, progresión no lineal y rejugabilidad, donde cada partida puede ofrecer experiencias distintas según cómo el jugador escoja jugar y evolucionar.Buscando crear un entorno de juego mixto 2D, combinando un poco de dinámica plataformera con elementos de exploración, la dificultad de una aventura gráfica y unos toques de RPG. Permitiendo al jugador vivir diversas experiencias de juego y escoger la forma de jugar que más sea de su agrado."

        if (window.resetCarousel) window.resetCarousel();
        break;

      case "Principal":
        heroTitle.textContent = "PRINCIPAL";
        heroSub.textContent = "MÉCANICAS CENTRALES";

        mainTitle.textContent = "NUCLEO DEL VIDEOJUEGO";

        carrusel1.textContent = "Ukhu Pacha busca darle al jugador la libertad de elegir entre diversos caminos y formas de jugar para ir avanzando por el mundo del juego. Así ofreciendo desafíos, caminos y experiencias de juego distintas. Sumado a ello, un mundo diseñado para ofrecer una amplia variedad de misiones, exploración, minijuegos, combates y bastante plataformeo, todo distribuidos estratégicamente a lo largo de las diferentes rutas por las que vayamos avanzando.";
        carrusel2.textContent = "El título contará con tres mecánicas principales, cada una vinculada al jugador en forma de un atributo, lo que nos permitira escoger entre los diversos eventos que vayamos encontrado mientras avanzamos la historia y vamos mejorando al personaje. Las acciones de cada atributo poseen su propia barra de acción, la cual se ira consumiendo por el uso de las mécanicas ligadas a un atributo en particular.";
        carrusel3.textContent = "La activación de eventos exige un determinado nivel en algún(os) atributo(s), objetos, habilidades o vínculos con NPCs, podremos escoger  entre tener diversos combates y abrir caminos con fuerza, transformarnos en animales míticos para cursar rutas ocultas o usar nuestro ingenio para cumplir misiones y búsquedas relacionadas con NPCs. Cada decisión que tomemos en la historia bloqueará otras rutas y eventos, así iremos trazando nuestro camino por el juego.";
        
        if (window.resetCarousel) window.resetCarousel();
        break;

      case "Atributos":
        heroTitle.textContent = "ATRIBUTOS";
        heroSub.textContent = "FUNCIONALIDAD Y PROGRESIÓN";

        mainTitle.textContent = "TIPOS DE ATRIBUTO";

        carrusel1.textContent = "El atributo Físico mejora la velocidad, fuerza de salto y capacidad de combate del jugador. Aumentar este atributo amplía la barra y la cantidad de acciones posibles. En combate, el jugador puede alternar entre dos armas, cuyos ataques consumen parte de la barra; cada nivel físico incrementa el daño el tiempo de ataque y posee mejoras adicionales. Finalmente, al subir este atributo se incrementa la movilidad, aumentando progresivamente la velocidad y el alcance de salto para acceder a zonas elevadas.";
        carrusel2.textContent = "El atributo Espiritual permite al jugador transformarse en tres animales con habilidades únicas que desbloquean rutas especiales del mundo. Estas transformaciones se obtienen al aumentar los puntos espirituales y alcanzar templos específicos. Cada forma ofrece ventajas únicas: el cóndor permite volar y alcanzar zonas elevadas, el puma otorga gran velocidad y saltos largos para superar distancias amplias, y la serpiente reduce el tamaño del jugador, facilitando el acceso a túneles o espacios estrechos.";
        carrusel3.textContent = "El atributo Mental abre acceso a diálogos extra con NPCs, permitiendo aprender trucos, obtener recompensas y desbloquear el uso de tecnología, puertas con código y creación de objetos. El jugador desarrolla un cuadro de habilidades con tres ramas que progresan automáticamente: Hackeo, para abrir puertas y manipular sistemas; Creación, para fabricar objetos útiles; y Vehículos, para conducir transportes o manejar armas montadas. Obtener información ofrece recompensas clave y opciones narrativas adicionales.";
        
        if (window.resetCarousel) window.resetCarousel();
        break;

      case "Videojuegos":
        heroTitle.textContent = "VIDEOJUEGOS";
        heroSub.textContent = "VIDEOJUEGOS DE REFERENCIA PARA EL PROYECTO";

        mainTitle.textContent = "REFERECIAS DE MÉCANICAS";
        
        carrusel1.textContent = "Plataformas: Lady Sia, Sabre Wulf, Spirits & Spells, The Adventures of Bayou Billy, Moon Crystal, Whomp 'Em, Samurai Pizza Cats, Warlock, Gon, Flash, Blackthorne, Cybernator, Demon Crest, Pop'n TwinBee: R.B.A., Hearth of Darkness, The Adventure of Little Ralph, Umihara Kawase Shun, Priny I, II, Mega-man Zero/ZX, Alice in Wonderland, Where the Wild Thing Are, Kekkaishi Kokubourou Shuurai, Aliens: Infestation, The Messenger, Hollow Knight, Owlboy, Shantae Serie.";
        carrusel2.textContent = "Aventura Gráfica: Indiana Jones and the Fate of Atlantis, Sam & Max Hit of the Road, Sam & Max Save the World, Maniac Mansion, Day of Tentacle, Monkey Island Serie, Simon the Sorcerer, Machinarium, Grim Fandango, Gemini Rue.";
        carrusel3.textContent = "Varios: Abuse, Wario Land 3, Wario: Master of Disguise, The Incredible Machine I, II, Disco Elysium, Yuppie Psycho, Breath of Fire III, IV, Crash Bash, Deception, Valkyrie Profile, DaemonClaw: Origins of Nnar, Earthion, Tyriam 2000, Hook, Mystery Dungeon: Shiren the Wanderer, Project Blue, Chrono Cross, Pilgrims, The Lost Vikyng.";
        
        if (window.resetCarousel) window.resetCarousel();
        break;      
      
      case "Audiovisuales":
        heroTitle.textContent = "AUDIOVISUALES";
        heroSub.textContent = "REFERENCIAS GRÁFICAS Y SONORAS PARA EL PROYECTO";

        mainTitle.textContent = "ILUSTRACIONES, MUSICA Y SFX";

        carrusel1.textContent = "https://www.behance.net/gallery/234450513/UKHU-PACHA-CONCEPTS-ART";
        carrusel2.textContent = "https://youtu.be/pzVBzOWFc24?si=O47ixtCHRS9iipcT";
        carrusel3.textContent = "https://youtu.be/L5pvL3Jfc2c?si=gfCAF48Z554KYg1J";

        if (window.resetCarousel) window.resetCarousel();
        break;      
    }

  });
  
  const navbar = document.querySelector("#navbar");
  
  if (!navbar) return;

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navIcons = document.getElementById("nav-icons");

  function toggleMenu(open) {
      
    if (!navMenu || !hamburger) return;

    const isOpen = typeof open === "boolean"
      ? open
      : !navMenu.classList.contains("open");
    
    navMenu.classList.toggle("open", isOpen);
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    
  }

  hamburger && hamburger.addEventListener("click", (e) => {

    e.stopPropagation();
    toggleMenu();

  });

  document.addEventListener("click", (e) => {

    if (!navMenu.classList.contains("open")) return;
    const insideNav = e.target.closest("#navbar");
    if (!insideNav) toggleMenu(false);

  });

  const menuLinks = navMenu ? navMenu.querySelectorAll("a") : [];
    menuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        
        if (link.target === "_blank") return;
        
        e.preventDefault && e.preventDefault();        
        const section = link.dataset.section || link.textContent.trim();
        
        toggleMenu(false);

    });
  });  

}