"use strict";

let boton = document.querySelector(".boton");
let notaFinal = document.querySelector(".notaFinal");

let numAleatorio1 = Math.floor(Math.random() * 11);
let numAleatorio2 = Math.floor(Math.random() * 11);

try {
	boton.addEventListener("click", ()=> {
		let valorFinal = document.querySelector(".nota").value;
		valorFinal = parseInt(valorFinal);

		let res = (numAleatorio1 + numAleatorio2 + valorFinal) / 3;
		res = Math.floor(res);
		res = res.toString();

		notaFinal.textContent = res;
		res = + res;

		switch (res) {
		case 1: console.log("Rebrobo");
			break;
		case 2: console.log("Rebrobo");
			break;
		case 3: console.log("Rebrobo");
			break;
		case 4: console.log("Rebrobo");
			break;
		case 5: console.log("Rebrobo");
			break;
		case 6: console.log("Aprobo");
			break;
		case 7: console.log("Aprobo");
			break;
		case 7: console.log("Aprobo");
			break;
		case 8: console.log("Aprobo");
			break;
		case 9: console.log("Aprobo");
			break;
		case 10: console.log("Aprobo");
			break;
		default: throw "Resultado alterado";
			break;
		}
	})
} catch(e) {
	console.log(e);

} finally {
	alert("Aca estuvo el Finally :)");
}