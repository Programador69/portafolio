"use strict";

let suma = document.querySelector(".suma");
let resta = document.querySelector(".resta");
let division = document.querySelector(".division");
let multiplicacion = document.querySelector(".multiplicacion");
let exponenciacion = document.querySelector(".exponenciacion");

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