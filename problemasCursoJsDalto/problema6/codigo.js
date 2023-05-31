"use strict";

class DatosAplicaciones {
	constructor(descargas,puntuacion,tamaño) {
		this.descarga = descargas;
		this.puntuacion = puntuacion;
		this.tamaño = tamaño;
	}

	get obtenerDescarga() {
		return this.descarga;
	}

	get obtenerPuntuacion() {
		return this.puntuacion;
	}

	get obtenerTamaño() {
		return this.tamaño;
	}
}

const codMobile = new DatosAplicaciones("148 millones de descargas", "4/5 estrellas", "5 Gb");
const minecraft = new DatosAplicaciones("500 millones de descargas", "5/5 estrellas", "100 Mb");
const subwaySurf = new DatosAplicaciones("1000 millones de descargas", "4/5 estrellas", "50 Mb");
const fallGuys = new DatosAplicaciones("20 millones de descargas", "4/5 estrellas", "20 Gb");
const freeFire = new DatosAplicaciones("1000 millones de descargas", "4.5/5 estrellas", "1.5 Gb");
const stardewValley = new DatosAplicaciones("1 millon de descargas", "4/5 estrellas", "350 Mb");
const pubg = new DatosAplicaciones("50 millones de descargas", "4.5/5 estrellas", "4 Gb");

let codInfo1 = document.querySelector(".codInfo1");
let codInfo2 = document.querySelector(".codInfo2");
let codInfo3 = document.querySelector(".codInfo3");

codInfo1.textContent = codMobile.obtenerDescarga;
codInfo2.textContent = codMobile.obtenerPuntuacion;
codInfo3.textContent = codMobile.obtenerTamaño;

let minecraftInfo1 = document.querySelector(".minecraftInfo1");
let minecraftInfo2 = document.querySelector(".minecraftInfo2");
let minecraftInfo3 = document.querySelector(".minecraftInfo3");

minecraftInfo1.textContent = minecraft.obtenerDescarga;
minecraftInfo2.textContent = minecraft.obtenerPuntuacion;
minecraftInfo3.textContent = minecraft.obtenerTamaño;

let subwaySurInfo1 = document.querySelector(".subwaySurfInfo1");
let subwaySurInfo2 = document.querySelector(".subwaySurfInfo2");
let subwaySurInfo3 = document.querySelector(".subwaySurfInfo3");

subwaySurInfo1.textContent = subwaySurf.obtenerDescarga;
subwaySurInfo2.textContent = subwaySurf.obtenerPuntuacion;
subwaySurInfo3.textContent = subwaySurf.obtenerTamaño;

let fallGuysInfo1 = document.querySelector(".fallGuysInfo1");
let fallGuysInfo2 = document.querySelector(".fallGuysInfo2");
let fallGuysInfo3 = document.querySelector(".fallGuysInfo3");

fallGuysInfo1.textContent = fallGuys.obtenerDescarga;
fallGuysInfo2.textContent = fallGuys.obtenerPuntuacion;
fallGuysInfo3.textContent = fallGuys.obtenerTamaño;

let freeFireInfo1 = document.querySelector(".freeFireInfo1");
let freeFireInfo2 = document.querySelector(".freeFireInfo2");
let freeFireInfo3 = document.querySelector(".freeFireInfo3");

freeFireInfo1.textContent = freeFire.obtenerDescarga;
freeFireInfo2.textContent = freeFire.obtenerPuntuacion;
freeFireInfo3.textContent = freeFire.obtenerTamaño;

let stardewValleyInfo1 = document.querySelector(".stardewValleyInfo1");
let stardewValleyInfo2 = document.querySelector(".stardewValleyInfo2");
let stardewValleyInfo3 = document.querySelector(".stardewValleyInfo3");

stardewValleyInfo1.textContent = stardewValley.obtenerDescarga;
stardewValleyInfo2.textContent = stardewValley.obtenerPuntuacion;
stardewValleyInfo3.textContent = stardewValley.obtenerTamaño;

let pubgInfo1 = document.querySelector(".pubgInfo1");
let pubgInfo2 = document.querySelector(".pubgInfo2");
let pubgInfo3 = document.querySelector(".pubgInfo3");

pubgInfo1.textContent = pubg.obtenerDescarga;
pubgInfo2.textContent = pubg.obtenerPuntuacion;
pubgInfo3.textContent = pubg.obtenerTamaño;

const botonDescarga = document.querySelectorAll(".botonDescarga");

let juegos = 0;

botonDescarga.forEach(element=> {
	element.addEventListener("click", ()=> {
			juegos++;
		if (juegos > 2) {
			alert("Ya descargaste tus 2 juegos");
		} else {
			alert("Descargando videojuego");
		}
	})
})