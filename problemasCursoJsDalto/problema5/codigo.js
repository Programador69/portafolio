"use strict";

const botonCelB = document.querySelector(".basico");
const botonCelGA = document.querySelector(".gamaAlta");
const botonTodos = document.querySelector(".todos");
const botonPrueba = document.querySelector(".pruebas");

let celularesBasicos = document.querySelector(".celularesBasicos");
let celualresGamaAlta = document.querySelector(".celularesGamaAlta");

botonCelB.addEventListener("click", ()=> {
	celularesBasicos.classList.remove("ocultar");
	celualresGamaAlta.classList.add("ocultar");
})

botonCelGA.addEventListener("click", ()=> {
	celualresGamaAlta.classList.remove("ocultar");
	celularesBasicos.classList.add("ocultar");
})

botonTodos.addEventListener("click", ()=> {
	celularesBasicos.classList.remove("ocultar");
	celualresGamaAlta.classList.remove("ocultar");
})

let infoB1 = document.querySelector(".infoB1");
let infoB2 = document.querySelector(".infoB2");
let infoB3 = document.querySelector(".infoB3");

let infoGA1 = document.querySelector(".infoGA1");
let infoGA2 = document.querySelector(".infoGA2");

class Celulares {
	constructor(color,peso,resolucionDePantalla,resolucionDeCamara,ram) {
		this.color = color;
		this.peso = peso;
		this.pantalla = resolucionDePantalla;
		this.camara = resolucionDeCamara;
		this.ram = ram;
	}

	get info() {
		return `Este telefono es de color ${this.color}, pesa ${this.peso}gr, cuenta con una resolucion de pantalla de ${this.pantalla}px, su camara es de ${this.camara} megapixeles y tiene ${this.ram}gb de RAM.`
	}

	prender() {
		alert("Prendiendo celular");
		alert("Celular prendido");
	}

	reiniciar() {
		alert("Reiniciando Celular");
		alert("Celular Reiniciado");
	}

	apagar() {
		alert("Apagando celular");
		alert("Celular Apagado");
	}

	tomarFoto() {
		alert("Foto capturada");
	}

	tomarVideo() {
		alert("Grabacion Iniciada");
		alert("Grabacion Detenida");
	}
}

class CelularGamaAlta extends Celulares {
	constructor(color,peso,resolucionDePantalla,resolucionDeCamara,ram,camaraLenta,reconocimientoFacial) {
		super(color,peso,resolucionDePantalla,resolucionDeCamara,ram);
		this.camaraLenta = camaraLenta;
		this.faceID = reconocimientoFacial;
	}

	get infoGA() {
		return `Este telefono es de color ${this.color}, pesa ${this.peso}gr, cuenta con una resolucion de pantalla de ${this.pantalla}px, su camara es de ${this.camara} megapixeles y tiene ${this.ram}gb de RAM. Ademas cuenta con una camara lenta de ${this.camaraLenta} fotogramas por segundo y cuenta con reconocimientoFacial(${this.faceID}).`;
	}

	pruebaCamaraLenta() {
		alert("Empezando grabacion en camara lenta");
		alert("Finalizo la grabacion en camara lenta");
	}

	pruebaFaceID() {
		alert("El Face ID funciona correctamente");
	}
}

const nokia1 = new Celulares("Rojo",250,1200,32,6);
const nokia2 = new Celulares("Amarillo",200,1440,24,8);
const nokia3 = new Celulares("Azul",300,100,64,4);

infoB1.textContent = nokia1.info;
infoB2.textContent = nokia2.info;
infoB3.textContent = nokia3.info;

const nokiaGA1 = new CelularGamaAlta("Verde",150,2000,100,8,500,"si");
const nokiaGA2 = new CelularGamaAlta("Amarillo",120,3000,75,12,1000,"si");

infoGA1.textContent = nokiaGA1.infoGA;
infoGA2.textContent = nokiaGA2.infoGA;

const botonPruebas = document.querySelectorAll(".mostrarPruebas");
const botonCerrar = document.querySelector(".salir");
const cuadroPruebas = document.querySelector(".pruebas");

botonPruebas.forEach((element) => {
	if (element.parentNode.className.includes("GA")) {
		element.addEventListener("click", ()=> {
			cuadroPruebas.classList.remove("ocultar");
			botonVideoLento.classList.remove("ocultar");
			botonFacial.classList.remove("ocultar");
			document.querySelector(".pruebas").style.height = "250px";
		})
	} else {
		element.addEventListener("click", ()=> {
		cuadroPruebas.classList.remove("ocultar");
		botonVideoLento.classList.add("ocultar");
		botonFacial.classList.add("ocultar");
		document.querySelector(".pruebas").style.height = "200px";
		})
	}
})

botonCerrar.addEventListener("click", ()=> {
	cuadroPruebas.classList.add("ocultar");
})

const botonPrender = document.querySelector(".prender");
const botonApagar = document.querySelector(".apagar");
const botonReiniciar = document.querySelector(".reiniciar");
const botonFoto = document.querySelector(".foto");
const botonVideo = document.querySelector(".grabar");
const botonVideoLento = document.querySelector(".camaraLenta");
const botonFacial = document.querySelector(".facial");


botonPrender.addEventListener("click", ()=> {
	nokia1.prender();
})

botonApagar.addEventListener("click", ()=> {
	nokia1.apagar();
})

botonReiniciar.addEventListener("click",()=> {
	nokia1.reiniciar();
})

botonFoto.addEventListener("click", ()=> {
	nokia1.tomarFoto();
})

botonVideo.addEventListener("click", ()=> {
	nokia1.tomarVideo();
})

botonVideoLento.addEventListener("click", ()=> {
	nokiaGA1.pruebaCamaraLenta();
})

botonFacial.addEventListener("click", ()=> {
	nokiaGA1.pruebaFaceID();
})