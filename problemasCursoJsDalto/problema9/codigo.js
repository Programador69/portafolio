"use ctrict";

const botonInscripcion = document.querySelectorAll(".materia");
let numeroAleatorio = 0;
let alumnoInscrito = 0;

botonInscripcion.forEach(element => {
	element.addEventListener("click", ()=> {

		let materia = element.innerHTML;
		numeroAleatorio = Math.floor(Math.random() * 21);
		valorAleatorio = numeroAleatorio + alumnoInscrito;
		console.log(alumnoInscrito + numeroAleatorio);

		if (valorAleatorio <= 19) {
			alert("Felicidades, te acabas de inscribir a " + materia);
			alumnoInscrito++;
		} else {
			alert("La materia ya esta llena, vuelve otro dia.");
		}
	})
})