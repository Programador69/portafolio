"use strict";

const ovaloCmabioTema = document.querySelector(".cambiar").querySelector("div");
const botonCambioTema = document.querySelector(".cambiar").querySelector("div").querySelector("div");

const titulo = document.querySelector("h1");
const textoTema = document.querySelector(".cambiar").querySelector("p");

const body = document.querySelector("BODY");
const articulos = document.querySelector(".datos").querySelectorAll("article");

const contenedorLogo = document.querySelector(".animacion");
const logo = document.querySelector(".animacion").querySelector("figure").querySelector("img");

const murcDerecha = document.querySelector(".murcielagoDerecha");
const murcIzquierda = document.querySelector(".murcielagoIzquierda");

const logoMurcD = murcDerecha.querySelector("figure").querySelector("img");
const logoMurcI = murcIzquierda.querySelector("figure").querySelector("img");

let claro = true;

botonCambioTema.addEventListener("click", ()=> {

	if (claro) {
	botonCambioTema.style.animation = "temaOscuro 1s ease-in";
	botonCambioTema.style.animationFillMode = "forwards";

	titulo.classList.add("tituloOscuro");
	textoTema.style.color = "#ccc";

	ovaloCmabioTema.style.background = "#ccc";
	botonCambioTema.style.background = "#f7f000";
	body.style.background = "#000";

	contenedorLogo.style.display = "block";
	logo.style.animation = "efectoLogo 3s ease-in 1";
	logo.style.animationFillMode = "forwards";

	murcDerecha.style.display = "block";
	murcIzquierda.style.display = "block";
	
	logoMurcD.style.animation = "derecha 2s ease-out";
	logoMurcD.style.animationFillMode = "forwards";

	logoMurcI.style.animation = "izquierda 2s ease-out";
	logoMurcI.style.animationFillMode = "forwards";

	articulos.forEach(art => {
		art.style.background = "#999";
	})
	
	claro = false;

	}else if (!claro) {
		botonCambioTema.style.animation = "temaClaro 1s ease-out";
		botonCambioTema.style.animationFillMode = "forwards";

		titulo.classList.remove("tituloOscuro");
		textoTema.style.color = "#000";

		ovaloCmabioTema.style.background = "#111";
		botonCambioTema.style.background = "#eee";
		body.style.background = "#fff";

		logo.style.animation = "nada 1s linear";
		logo.style.animationFillMode = "forwards";

		logoMurcD.style.animation = "nada 1s linear";
		logoMurcD.style.animationFillMode = "forwards";

		logoMurcI.style.animation = "nada 1s linear";
		logoMurcI.style.animationFillMode = "forwards";

		articulos.forEach(art => {
			art.style.background = "#bffffe";
		})
		
		claro = true;
	}
})