"use strict";

// obteniendo los botones del documento HTML por medio de sus clases
const botonSuma = document.querySelector(".suma");
const botonResta = document.querySelector(".resta");
const botonMultiplicacion = document.querySelector(".multiplicacion");
const botonDivision = document.querySelector(".division");
const botonConcatenar = document.querySelector(".concatenar");

// obteniendo los elementos de las 2 entradas y de donde mostraremos el resultado
let inputValor1 = document.querySelector(".primerValor");
let inputValor2 = document.querySelector(".segundoValor");
let resultado = document.querySelector(".resultadoFinal");

// empezando con los eventos para repsonder cuando el usuario le de click
botonSuma.addEventListener("click", ()=> {
	let valor1 = parseInt(inputValor1.value);
	let valor2 = parseInt(inputValor2.value);

// realizando la validacion de los campos
	if((valor1 == undefined || valor2 == undefined) || (Number.isNaN(valor1) == true || Number.isNaN(valor2) == true)) {
		alert("Debes poner un numero en cada entrada y despues darle click al simbolo de la operacion");
	}else {
		// mostrando la repsuesta en pantalla
		let res = valor1 + valor2;
		resultado.textContent = res.toString();
	}
})

botonResta.addEventListener("click", ()=> {
	let valor1 = parseInt(inputValor1.value);
	let valor2 = parseInt(inputValor2.value);

	if((valor1 == undefined || valor2 == undefined) || (Number.isNaN(valor1) == true || Number.isNaN(valor2) == true)) {
		alert("Debes poner un numero en cada entrada y despues darle click al simbolo de la operacion");
	}else {
		let res = valor1 - valor2;
		resultado.textContent = res.toString();
	}
})

botonMultiplicacion.addEventListener("click", ()=> {
	let valor1 = parseInt(inputValor1.value);
	let valor2 = parseInt(inputValor2.value);

	if((valor1 == undefined || valor2 == undefined) || (Number.isNaN(valor1) == true || Number.isNaN(valor2) == true)) {
		alert("Debes poner un numero en cada entrada y despues darle click al simbolo de la operacion");
	}else {
		let res = valor1 * valor2;
		resultado.textContent = res.toString();
	}
})

botonDivision.addEventListener("click", ()=> {
	let valor1 = parseInt(inputValor1.value);
	let valor2 = parseInt(inputValor2.value);

	if((valor1 == undefined || valor2 == undefined) || (Number.isNaN(valor1) == true || Number.isNaN(valor2) == true)) {
		alert("Debes poner un numero en cada entrada y despues darle click al simbolo de la operacion");
	}else {
		let res = valor1 / valor2;
		resultado.textContent = res.toString();
	}
})

botonConcatenar.addEventListener("click", ()=> {
	let valor1 = inputValor1.value;
	let valor2 = inputValor2.value;

	if(valor1 == undefined || valor2 == undefined) {
		alert("Debes poner algun valor en ambas entradas y despues darle click al boton");
	}else {
		resultado.textContent = valor1 + valor2;
	}
})