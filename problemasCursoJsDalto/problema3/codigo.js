"use strict";

let numeroAlumnos = prompt("Cuantos alumnos son?");
numeroAlumnos = +numeroAlumnos;
let asistencia = prompt("Cuantos dias de asistencia son?");
asistencia = +asistencia;

let alumnos = [], asistenciaAlumno = [];

for (let i = 0; i < numeroAlumnos; i++) {
	let nombre, asistenciaFinal;

	nombre = prompt("Diga el nombre del alumno");
	asistenciaFinal = prompt(`Ponga la asistencia total del alumno ${nombre}`);
	asistenciaFinal = +asistenciaFinal;

	alumnos.push(nombre);
	asistenciaAlumno.push(asistenciaFinal);	
}

let asistenciaMinima = asistencia - (asistencia*0.10);

let aprobados = document.querySelector(".aprobados");
let reprobados = document.querySelector(".reprobados");


for (let i = 0; i < alumnos.length; i++) {
	if (asistenciaAlumno[i] >= asistenciaMinima) {
		aprobados.textContent += `${alumnos[i]} con ${asistenciaAlumno[i]}/${asistencia} asistencias, `;
	} else {
		reprobados.textContent += `${alumnos[i]} con ${asistenciaAlumno[i]}/${asistencia} asistencias, `;
	}
}