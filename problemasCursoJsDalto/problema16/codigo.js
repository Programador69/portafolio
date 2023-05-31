"use strict";

let datos = [
	{
		"nombre": "Cofla Perez",
		"correo": "cofla@gmail.com",
		"materia": "Matematicas"
	}, {
		"nombre": "Cofla Perez",
		"correo": "cofla@gmail.com",
		"materia": "Informatica"
	}, {
		"nombre": "Lupe Gutierrez",
		"correo": "lupe@gmail.com",
		"materia": "Quimica"
	}, {
		"nombre": "Lupe Gutierrez",
		"correo": "lupe@gmail.com",
		"materia": "Español"
	}, {
		"nombre": "Fernanda",
		"correo": "fer@gmail.com",
		"materia": "Ingles"
	}, {
		"nombre": "Fernanda",
		"correo": "fer@gmail.com",
		"materia": "Matematicas"
	}
]


let alumnos = document.querySelector(".alumnos");

for(let elementos of datos) {

	let nombreAlumno = document.createTextNode(elementos.nombre);
	let listaNombre = document.createElement("LI");

	listaNombre.appendChild(nombreAlumno);
	alumnos.appendChild(listaNombre);

	let nombreCorreo = document.createTextNode(elementos.correo);
	let listaCorreo = document.createElement("LI");

	listaCorreo.appendChild(nombreCorreo);
	alumnos.appendChild(listaCorreo);

	let nombreMateria = document.createTextNode(elementos.materia);
	let listaMateria = document.createElement("LI");

	listaMateria.appendChild(nombreMateria);
	alumnos.appendChild(listaMateria);

	let fecha = document.createElement("INPUT");
	fecha.type="date";
	fecha.readOnly = true;

	alumnos.appendChild(fecha);
	
}

const botonModificar = document.querySelector(".modificar");
const botonRealizarCambios = document.querySelector(".realizarCambios");

botonModificar.addEventListener("click", ()=> {
	let inputs = document.getElementsByTagName("input");

	for(let element of inputs) {
		element.readOnly = false;
	}
})

botonRealizarCambios.addEventListener("click", ()=> {
	let inputs = document.getElementsByTagName("input");

	for(let element of inputs) {
		element.readOnly = true;
	}
})