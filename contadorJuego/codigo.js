"use strict";

const resta = document.querySelector(".restar");
const resetear = document.querySelector(".resetear");
const suma = document.querySelector(".sumar");

resta.addEventListener("click", ()=> {
	let resultadoFinal = document.querySelector(".resultado").textContent;
	resultadoFinal = +resultadoFinal;
	resultadoFinal -= 1;
	let resultado = document.querySelector(".resultado");
	resultado.textContent = resultadoFinal.toString();
})

resetear.addEventListener("click", ()=> {
	let resultado = document.querySelector(".resultado");
	resultado.textContent = "0";
})

suma.addEventListener("click", ()=> {
	let resultadoFinal = document.querySelector(".resultado").textContent;
	resultadoFinal = +resultadoFinal;
	resultadoFinal += 1;
	let resultado = document.querySelector(".resultado");
	resultado.textContent = resultadoFinal.toString();
})