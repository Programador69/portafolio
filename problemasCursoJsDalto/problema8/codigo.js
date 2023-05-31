"use strict";

const botonPregunta = document.querySelector(".boton");
const botonAlumno = document.querySelector(".botonAlumno");
const resMateria = document.querySelector(".materia");
const resProfe = document.querySelector(".profesor");
const resAlumnos = document.querySelector(".alumnos");

class Materias {
	constructor(nombreMateria, alumnos, profesor){
		this.materia = nombreMateria;
		this.alumnos = alumnos;
		this.profe = profesor;
	}

	get obtenerMateria() {
		return this.materia;
	}

	get obtenerAlumnos() {
		return this.alumnos;
	}

	get obtenerProfesor() {
		return this.profe;
	}
}

const matematicas = new Materias("Matematicas ","Juan, Jaime, Fernando, Jazmin, Fernanda, Guadalupe, Ximena, Ricardo, Oscar, Julio, Gonzalo, Estrella, Cofla", "JulioProfe ");
const informatica = new Materias("Informatica ","Esteban, Jaime, Fernando, Wendy, Fernanda, Guadalupe, Ximena, Lucas, Oscar, Julio, Ranulfo, Estrella, Naomi", "Dalto ");
const quimica = new Materias("Quimica ","Juan, Jaime, Paco, Jazmin, Fernanda, Ulisa, Ximena, Ricardo, Jimena, Julio, Gonzalo, Ivan, Cofla", "Enrique Iglesias ");
const biologia = new Materias("Biologia ","Juan, Scarlett, Fernando, Jazmin, Patricia, Guadalupe, Ximena, Ricardo, Kelly, Julio, Julieta, Estrella", "Brazzers ");

botonPregunta.addEventListener("click", ()=> {
	let pregunta = prompt("Ponga el nombre de la materia");
	pregunta = pregunta.toLowerCase();

	if (pregunta == "matematicas") {
		resMateria.textContent = matematicas.obtenerMateria;
		resProfe.textContent = matematicas.obtenerProfesor;
		resAlumnos.textContent = matematicas.obtenerAlumnos;
	} else if (pregunta == "informatica") {
		resMateria.textContent = informatica.obtenerMateria;
		resProfe.textContent = informatica.obtenerProfesor;
		resAlumnos.textContent = informatica.obtenerAlumnos;
	} else if (pregunta == "quimica") {
		resMateria.textContent = quimica.obtenerMateria;
		resProfe.textContent = quimica.obtenerProfesor;
		resAlumnos.textContent = quimica.obtenerAlumnos;
	} else if(pregunta == "biologia") {
		resMateria.textContent = biologia.obtenerMateria;
		resProfe.textContent = biologia.obtenerProfesor;
		resAlumnos.textContent = biologia.obtenerAlumnos;
	} else {
		alert("Esa materia no existe, la escribiste mal o todavia no esta disponible.");
	}
})

let alumnosMatematicas = matematicas.obtenerAlumnos;
let alumnosInofrmatica = informatica.obtenerAlumnos;
let alumnosQuimica = quimica.obtenerAlumnos;
let alumnosBiologia = biologia.obtenerAlumnos;

botonAlumno.addEventListener("click", ()=> {
	let nombre = prompt("Dime que alumno quieres saber");

	let inicialNombre = nombre.charAt(0);
	inicialNombre = inicialNombre.toUpperCase();

	nombre = nombre.toLowerCase();
	nombre = inicialNombre + nombre.slice(1);

	resMateria.textContent = "";
	resProfe.textContent = "";
	resAlumnos.textContent = "";

	if (alumnosMatematicas.includes(nombre)) {
		resMateria.textContent += matematicas.obtenerMateria;
		resProfe.textContent += matematicas.obtenerProfesor;
	}

	if (alumnosInofrmatica.includes(nombre)) {
		resMateria.textContent += informatica.obtenerMateria;
		resProfe.textContent += informatica.obtenerProfesor;
	}

	if (alumnosQuimica.includes(nombre)) {
		resMateria.textContent += quimica.obtenerMateria;
		resProfe.textContent += quimica.obtenerProfesor;
	}

	if (alumnosBiologia.includes(nombre)) {
		resMateria.textContent += biologia.obtenerMateria;
		resProfe.textContent += biologia.obtenerProfesor;
	}

	resAlumnos.textContent = nombre;
})