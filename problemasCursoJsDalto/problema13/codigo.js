"use strict";

const ejeX = window.screen.width;
const ejeY = window.screen.height;

const resultado = document.querySelector(".resultado");
const boton = document.querySelector(".boton");

if (ejeX < 1920 | ejeY < 1080) {
	resultado.textContent = `${ejeX}px en el eje X (largo) y ${ejeY}px en el eje Y (alto); por lo que no es Full HD ya que para eso se necesita 1920px en X y 1080px en Y, aun asi la puedes comprar si gustas`;
} else {
	resultado.textContent = `${ejeX}px en el eje X (largo) y ${ejeY}px en el eje Y (alto); por lo que si es Full HD y la puedes comprar si gustas`;
}

boton.addEventListener("click", ()=> {
	let res = confirm("¿Estas seguro que quieres compar la computadora?");

	if (res) {
		alert("Felicidades, la computadora es tuya.");
	} else {
		alert("No te preocupes, ya encontraras una computadora para ti");
	}
})