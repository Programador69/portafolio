const menu = document.querySelector(".menu");
const opciones = document.querySelector(".opciones");
const opciones_link = document.querySelector(".opcionesLink");
const logo = document.querySelector(".logo");

menu.addEventListener("click", ()=>{
	opciones.classList.toggle("visible");
})

opciones_link.addEventListener("click", ()=>{
	opciones.classList.remove("visible");
})