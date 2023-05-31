"use strict";

let datos = [
{
	parcial1 : 8,
	parcial2 : 7,
	parcial3 : 10
}
];

let resParcial1 = document.querySelector(".resParcial1");
let resParcial2 = document.querySelector(".resParcial2");
let resParcial3 = document.querySelector(".resParcial3");
let promedio = document.querySelector(".promedio");

const obtenerDatos =() => {
	for (let d of datos) {
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve(d);
				reject("Hubo un error al manejar los datos");
			}, 3000);
		});
	}
}


const alumnos = async () => {
	datos = await obtenerDatos();

	resParcial1.textContent = datos.parcial1.toString();
	resParcial2.textContent = datos.parcial2.toString();
	resParcial3.textContent = datos.parcial3.toString();
	promedio.textContent = Math.floor((datos.parcial1 + datos.parcial2 + datos.parcial3) / 3);
}

alumnos();