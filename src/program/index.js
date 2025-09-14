// INDEX

import { Logo, LogoEvents } from "./sections/logo.js";
import { Nav, NavEvents } from "./sections/nav.js";
import { Hero } from "./sections/hero.js";
import { Main, MainEvents } from "./sections/main.js";
import { Footer } from "./sections/footer.js";

export function App() {
  return `
    ${Logo()}
    ${Nav()}
    ${Hero()}
    ${Main()}
    ${Footer()}
  `;
}

export function AppEvents() {
  LogoEvents();
  NavEvents()  
  MainEvents();
}