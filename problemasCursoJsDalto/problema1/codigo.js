"use strict";

let clientes = prompt("¿Cuntos clientes son?");
let array = [];

for (let i = 0; i < clientes; i++) {

	let persona = i + 1;
	let presupuesto = prompt(`Dime cuanto dinero tienes persona ${persona}`);

	presupuesto = +presupuesto;

	array.push(presupuesto);
}

let heladoDeAgua = 0.6;
let heladoDeCrema = 1;
let heladoHeladix = 1.6;
let heladoHeladovich = 1.7;
let heladoHelardo = 1.8;
let heladoConfites = 2.9;
let poteUnCuarto = 2.9;

let res = document.querySelector(".res");

for (let i = 0; i < clientes; i++) {

	let persona = i + 1;
	let cambio = 0;

	if (array[i] > heladoDeAgua) {
		if (array[i] > heladoDeCrema) {
			if (array[i] > heladoHeladix) {
				if (array[i] > heladoHeladovich) {
					if (array[i] > heladoHelardo) {
						if (array[i] >= heladoConfites) {
							cambio = array[i] - heladoConfites;
							res.textContent += `Tu, persona ${persona} te alcanza para el Helado Confites o un pote de 1/4 y tu cambio es de $${cambio}.`;
						} else {
							cambio = array[i] - heladoHelardo;
							res.textContent += `Tu, persona ${persona} te puedes comprar el Helado Helardo y tu cambio es $${cambio}.`;
						}
					} else {
						if (array[i] == heladoHelardo) {
							cambio = array[i] - heladoHelardo;
							res.textContent += `Tu, persona ${persona} te puedes comprar el Helado Helardo y tu cambio es $${cambio}.`;
						} else {
							cambio = array[i] - heladoHeladovich;
							res.textContent += `Tu, persona ${persona} te puedes comprar el Helado Heladovich y tu cambio es $${cambio}.`;
						}
					}
				} else {
					if (array[i] == heladoHeladovich) {
						cambio = array[i] - heladoHeladovich;
						res.textContent += `Tu, persona ${persona} te puedes comprar el Helado Heladovich y tu cambio es $${cambio}.`;
					} else {
						cambio = array[i] - heladoHeladix;
						res.textContent += `Tu, persona ${persona} te alcanza para un Helado Heladix y tu cambio es $${cambio}.`;
					}
				}
			} else {
				if (array[i] == heladoHeladix) {
					cambio = array[i] - heladoHeladix;
					res.textContent += `Tu, persona ${persona} te alcanza para un Helado Heladix y tu cambio es $${cambio}.`;
				} else {
					cambio = array[i] - heladoDeCrema;
					res.textContent += `Tu, persona ${persona} te puedes comprar un Helado de Crema y tu cambio es $${cambio}.`;
				}
			}
		} else {
			if (array[i] == heladoDeCrema) {
				cambio = array[i] - heladoDeCrema;
				res.textContent += `Tu, persona ${persona} te puedes comprar un Helado de Crema y tu cambio es $${cambio}.`;
			} else {
				cambio = array[i] - heladoDeAgua;
				res.textContent += `Tu, persona ${persona} te alcanza para el Helado de Agua y te sobran $${cambio}.`;
			}
		}
	} else {
		if (array[i] == heladoDeAgua) {
			cambio = array[i] - heladoDeAgua;
			res.textContent += `Tu, persona ${persona} te alcanza para el Helado de Agua y te sobran $${cambio}.`;
		} else {
			res.textContent += `Tu, persona ${persona} no te alcanza para nada.`;
		}
	}
}