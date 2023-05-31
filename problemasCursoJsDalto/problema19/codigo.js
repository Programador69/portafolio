"use strict";

const lista = document.querySelector(".lista");

// recuerda que para que esto funcione necesitamos que estar con el localhost
// solo activamos el xampp y movemos esta carpeta al htdocs

// con fetch

const mostrarDatos = async () => {

	try {

		const peticion = await fetch("datos.txt");
		const informacion = await peticion.json();

		for(let i = 0; i < informacion.length; i++) {

			let nuevoLi1 = document.createDocumentFragment()
			let texto1 = document.createElement("LI");
			texto1.textContent = informacion[i].nombreAlumno;
			nuevoLi1.appendChild(texto1);
			lista.appendChild(nuevoLi1);

			let nuevoLi2 = document.createDocumentFragment()
			let texto2 = document.createElement("LI");
			texto2.textContent = informacion[i].aprobo;
			nuevoLi2.appendChild(texto2);
			lista.appendChild(nuevoLi2);

		 	let nuevoLi3 = document.createDocumentFragment()
		 	let texto3 = document.createElement("LI");
		 	texto3.textContent = informacion[i].nombreCarrera;
		 	nuevoLi3.appendChild(texto3);
		 	lista.appendChild(nuevoLi3);
		}

	}catch(e) {
		alert(e);
	}
}

mostrarDatos();


// con axios

// const mostrarDatos = async () => {

// 	try {

// 		const peticion = await axios("datos.txt");
// 		const informacion = await peticion.data;

// 		for(let i = 0; i < informacion.length; i++) {

// 			let nuevoLi1 = document.createDocumentFragment()
// 			let texto1 = document.createElement("LI");
// 			texto1.textContent = informacion[i].nombreAlumno;
// 			nuevoLi1.appendChild(texto1);
// 			lista.appendChild(nuevoLi1);

// 			let nuevoLi2 = document.createDocumentFragment()
// 			let texto2 = document.createElement("LI");
// 			texto2.textContent = informacion[i].aprobo;
// 			nuevoLi2.appendChild(texto2);
// 			lista.appendChild(nuevoLi2);

// 		 	let nuevoLi3 = document.createDocumentFragment()
// 		 	let texto3 = document.createElement("LI");
// 		 	texto3.textContent = informacion[i].nombreCarrera;
// 		 	nuevoLi3.appendChild(texto3);
// 		 	lista.appendChild(nuevoLi3);
// 		}

// 	}catch(e) {
// 		alert(e);
// 	}
// }

// mostrarDatos();