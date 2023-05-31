let calcular = document.querySelector(".calcular");

calcular.addEventListener("click",funcionIMC);
function funcionIMC () {
	let peso = document.querySelector(".peso").value;
	let altura = document.querySelector(".altura").value;
	altura = altura/100;
	let resultado = peso / (altura**2);
	resultado = resultado.toString();
	alert("El resultado de tu IMC es: " + resultado.substr(0,5));
}