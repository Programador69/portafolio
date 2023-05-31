"use strict";

const afimra = document.querySelector(".afirma");
const niega = document.querySelector(".niega");

afimra.addEventListener("click", ()=> {
	console.log("Que bueno que confies en Cofla");
})

niega.addEventListener("click", ()=> {
	console.log("¿Apoco no confias en el gran Cofla?");
})

let asistencias = prompt("Dime, ¿cuantas asistencias tivo Cofla? x/50");
asistencias = +asistencias;
let promedio = prompt("Dime el promedio de las materias de Cofla");
promedio = +promedio;
let trabajos = prompt("¿Cuantos trabajos practicos entrego? x/10");
trabajos = +trabajos;

const resultadoFinal =(asistencias,promedio,trabajos) => {
	let asistenciaFinal = (asistencias * 100) / 50;
	let trabajoFinal = (trabajos * 100) / 10;

	if (asistenciaFinal >= 90 && promedio >= 7 && trabajoFinal >= 75) {
		console.log("%c¡Felicidades Cofla, Aprobaste!", "color:green; padding:20px; font-size:20px;");
		console.log("%cAsistencias: " + asistenciaFinal + "%", "color:green; padding:20px; font-size:18px");
		console.log("%cPromedio de materias: " + promedio + "/10", "color:green; padding:20px; font-size:18px");
		console.log("%cTrabajos entregados: " + trabajoFinal + "%", "color:green; padding:20px; font-size:18px");
	} else {
		console.log("%cLo siento Cofla, no te alcanzo esta vez", "color:red; padding:20px; font-size:20px;");
		console.log("%cAsistencias: " + asistenciaFinal + "%", "color:yellow; background:#000; padding:20px; font-size:18px");
		console.log("%cPromedio de materias: " + promedio + "/10", "color:yellow; background:#000; padding:20px; font-size:18px");
		console.log("%cTrabajos entregados: " + trabajoFinal + "%", "color:yellow; background:#000; padding:20px; font-size:18px");
	}
}

resultadoFinal(asistencias,promedio,trabajos);