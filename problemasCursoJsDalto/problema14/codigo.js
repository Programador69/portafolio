"use strict";

let info = document.querySelector(".info");

const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocolo = window.location.protocol;

info.textContent = `El href es: ${href}, el hostname es: ${hostname}, el pathname es: ${pathname} y el protocolo es: ${protocolo}`;