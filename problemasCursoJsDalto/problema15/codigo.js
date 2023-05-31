"use strict";

const boton = document.querySelector(".boton");
let resultado = document.querySelector(".resultado");

const error=(nombre,correo,materia) => {
	let pruebasPasadas = 0;

	if(typeof(nombre) == "string" && nombre.length > 5 && nombre.length < 100) {
		pruebasPasadas++;
	}

	if (typeof(correo) == "string" && correo.includes("@") && correo.includes(".com")) {
		pruebasPasadas++;
	}

	if (typeof(materia) == "string" && materia == "Matematicas" || materia == "Informatica" || materia == "Quimica" || materia == "Español" || materia == "Ingles") {
		pruebasPasadas++;
	}

	if (pruebasPasadas == 3) {
		return false;
	}else {
		return true;
	}
}

boton.addEventListener("click", (e)=> {

	let nombre = document.querySelector(".nombre").value;
	let correo = document.querySelector(".correo").value;
	let materia = document.querySelector(".opciones").value;

	let res = error(nombre,correo,materia);
	e.preventDefault();

	if(res) {
		resultado.textContent = "Quisiste hacer trampa pero no la tendras tan facil";
		resultado.style.color="red";
	}else {
		nombre = nombre.split(" ");

		resultado.textContent = `${nombre[0]}, tu formulario para la materia ${materia} se envio correctamente`;
		resultado.style.color="green";

		nombre.value = "";
		correo.value = "";
	}
})