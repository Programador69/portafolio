"use strict";

const btnRegistrar = document.querySelector(".envio");
let contenedorNatacion = document.querySelector(".contenedorNatacion");
let contenedorAtletismo = document.querySelector(".contenedorAtletismo");
let contenedorBox = document.querySelector(".contenedorBox");
let contenedorCiclismo = document.querySelector(".contenedorCiclismo");
let contenedorArco = document.querySelector(".contenedorArco");


const agregarNatacion = datos => {

	for(let clave in datos) {
		const fragmento = document.createDocumentFragment();
		const div = document.createElement("DIV");
		const p = document.createElement("P");
		const texto = document.createTextNode(datos[clave]);

		p.appendChild(texto);
		div.appendChild(p);
		fragmento.appendChild(div);
		contenedorNatacion.appendChild(fragmento);
	}

}

const agregarAtletismo = datos => {
	
	for(let clave in datos) {
		const fragmento = document.createDocumentFragment();
		const div = document.createElement("DIV");
		const p = document.createElement("P");
		const texto = document.createTextNode(datos[clave]);

		p.appendChild(texto);
		div.appendChild(p);
		fragmento.appendChild(div);
		contenedorAtletismo.appendChild(fragmento);
	}

}

const agregarBox = datos => {
	
	for(let clave in datos) {
		const fragmento = document.createDocumentFragment();
		const div = document.createElement("DIV");
		const p = document.createElement("P");
		const texto = document.createTextNode(datos[clave]);

		p.appendChild(texto);
		div.appendChild(p);
		fragmento.appendChild(div);
		contenedorBox.appendChild(fragmento);
	}

}

const agregarCiclismo = datos => {
	
	for(let clave in datos) {
		const fragmento = document.createDocumentFragment();
		const div = document.createElement("DIV");
		const p = document.createElement("P");
		const texto = document.createTextNode(datos[clave]);

		p.appendChild(texto);
		div.appendChild(p);
		fragmento.appendChild(div);
		contenedorCiclismo.appendChild(fragmento);
	}

}

const agregarArco = datos => {
	
	for(let clave in datos) {
		const fragmento = document.createDocumentFragment();
		const div = document.createElement("DIV");
		const p = document.createElement("P");
		const texto = document.createTextNode(datos[clave]);

		p.appendChild(texto);
		div.appendChild(p);
		fragmento.appendChild(div);
		contenedorArco.appendChild(fragmento);
	}

}

btnRegistrar.addEventListener("click", ()=>{
	let nombre = document.querySelector(".nombre").value;
	let apellidos = document.querySelector(".apellidos").value;
	let deporte = document.querySelector(".competicion").value;
	let nacionalidad = document.querySelector(".nacionalidad").value;
	let edad = document.querySelector(".edad").value;
	let checkM = document.querySelector(".masculino");
	let checkF = document.querySelector(".femenino");

	if (nombre=="" || apellidos=="" || deporte=="" || nacionalidad=="" || edad==""){
		alert("Rellena todos los campos");
	}else if (checkF.checked && checkM.checked) {
		alert("Solo puedes escoger 1 genero");
	}else if(checkF.checked) {

		let datos = {nombre,apellidos,deporte,nacionalidad,edad,genero:"Femenino"};

		switch(deporte) {
		case "Natacion": agregarNatacion(datos);
			break;
		case "Atletismo": agregarAtletismo(datos);
			break;
		case "Box": agregarBox(datos);
			break;
		case "Ciclismo": agregarCiclismo(datos);
			break;
		case "Arco": agregarArco(datos);
			break;
		default: alert("Elige un deporte en existencia");
			break;
		}
	}else if(checkM.checked) {

		let datos = {nombre,apellidos,deporte,nacionalidad,edad,genero:"Masculino"};

		switch(deporte) {
		case "Natacion": agregarNatacion(datos);
			break;
		case "Atletismo": agregarAtletismo(datos);
			break;
		case "Box": agregarBox(datos);
			break;
		case "Ciclismo": agregarCiclismo(datos);
			break;
		case "Arco": agregarArco(datos);
			break;
		default: alert("Elige un deporte en existencia");
			break;
		}
	}else if (!checkF.checked && !checkM.checked) {
		alert("Escoge uno de los 2 generos puestos");
	}
})