"use strict";

const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const division = document.querySelector(".division");
const multiplicacion = document.querySelector(".multiplicacion");
const exponenciacion = document.querySelector(".exponenciacion");
const raizCuadrada = document.querySelector(".raizCuadrada");
const raizCubica = document.querySelector(".raizCubica");

let res = document.querySelector(".res");

suma.addEventListener("click", ()=> {
	let numero1 = prompt("Inserte el numero 1");
	numero1 = +numero1;
	let numero2 = prompt("Inserte el numero 2");
	numero2 = +numero2;

	res.textContent = numero1 + numero2;
})

resta.addEventListener("click", ()=> {
	let numero1 = prompt("Inserte el numero 1");
	numero1 = +numero1;
	let numero2 = prompt("Inserte el numero 2");
	numero2 = +numero2;

	res.textContent = numero1 - numero2;
})

division.addEventListener("click", ()=> {
	let numero1 = prompt("Inserte el numero 1");
	numero1 = +numero1;
	let numero2 = prompt("Inserte el numero 2");
	numero2 = +numero2;

	res.textContent = numero1 / numero2;
})

multiplicacion.addEventListener("click", ()=> {
	let numero1 = prompt("Inserte el numero 1");
	numero1 = +numero1;
	let numero2 = prompt("Inserte el numero 2");
	numero2 = +numero2;

	res.textContent = numero1 * numero2;
})

exponenciacion.addEventListener("click", ()=> {
	let numero1 = prompt("Inserte el numero 1");
	numero1 = +numero1;
	let numero2 = prompt("Inserte el numero 2");
	numero2 = +numero2;

	res.textContent = numero1 ** numero2;
})

raizCuadrada.addEventListener("click", ()=> {
	let numero = prompt("Inserte el numero");

	res.textContent = Math.sqrt(numero);
})

raizCubica.addEventListener("click", ()=> {
	let numero = prompt("Inserte el numero");

	res.textContent = Math.cbrt(numero);
})