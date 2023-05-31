"use strict";

let contenedor = document.querySelector(".contenedor");

const agregarSection =(titulo,link,modelo) => {
	let section = document.createElement("SECTION");
	let h3 = document.createElement("H3");
	let figure = document.createElement("FIGURE");
	let img = document.createElement("IMG");
	let h4 = document.createElement("H4");

	h3.textContent = titulo;
	h3.style.marginBottom ="20px";
	img.setAttribute("src",link);
	img.style.width ="250px";
	h4.textContent = `Modelo: ${modelo}`;

	section.appendChild(h3);
	figure.appendChild(img);
	section.appendChild(figure);
	section.appendChild(h4);

	contenedor.appendChild(section);
}

agregarSection("Llave 1", "https://www.pnguniverse.com/wp-content/uploads/2020/09/Llave.png", "KSDF58DJ");
agregarSection("Llave 2", "https://www.pnguniverse.com/wp-content/uploads/2020/09/Llave.png", "WUIVNB47");
agregarSection("Llave 3", "https://www.pnguniverse.com/wp-content/uploads/2020/09/Llave.png", "GJSN465C");

let secciones = document.getElementsByTagName('SECTION');

for (let sec of secciones) {
	sec.addEventListener("click", ()=> {
		alert(`${sec.innerText}, fue seleccionada correctamente`);
		})
}