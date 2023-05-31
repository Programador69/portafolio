"use strict";

const entrada =() => {
	let preguntaEntrada = prompt("¿Cuantos años tienes?");
	let tiempo = Math.floor(Math.random() * 3);
	let lista = 0;

	let res = document.querySelector(".res");

	if (tiempo == 2 && lista == 0 && preguntaEntrada >= 18) {
		alert("Eres la primera persona despues de las 2 am; puedes pasar gratis");
		lista ++;
	} else {
		if (preguntaEntrada >= 18) {
			res.textContent += "Puede pasar pero debe pagar $250";
			lista ++;
		} else {
			res.textContent += "No puede pasar, es menor de edad";
		}
	}
}

entrada();
entrada();
entrada();
entrada();
entrada();