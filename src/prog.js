// MAIN PROGRAM

import './style.css';
import { App, AppEvents } from "./program/index.js";

document.querySelector('#app').innerHTML = App();
AppEvents();