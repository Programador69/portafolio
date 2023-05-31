const menu = document.querySelector(".menu");
const opciones = document.querySelector(".opciones");
const referenciaLink = document.querySelector(".ref");

const camisas = document.querySelector(".camisas");
const pantalones = document.querySelector(".pantalones");
const zapatos = document.querySelector(".zapatos");
const llaveros = document.querySelector(".llaveros");
const bolsas = document.querySelector(".bolsas");
const conjuntos = document.querySelector(".conjuntos");

const selecciones = document.querySelector(".selecciones");

menu.addEventListener("click",()=>{
	opciones.classList.toggle("opciones_visible");
})

referenciaLink.addEventListener("click",()=>{
	opciones.classList.remove("opciones_visible");
})

selecciones.addEventListener("change",()=>{
	if (selecciones.value == "Pantalon" && window.innerWidth < 600) {
		pantalones.style.display="block";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Camisas" && window.innerWidth < 600){
		pantalones.style.display="none";
		camisas.style.display="block";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Zapatos" && window.innerWidth < 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="block";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Llaveros" && window.innerWidth < 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="block";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Bolsas" && window.innerWidth < 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="block";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Conjuntos" && window.innerWidth < 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="block";
	}else if (selecciones.value == "Pantalon" && window.innerWidth >= 600) {
		pantalones.style.display="flex";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Camisas" && window.innerWidth >= 600){
		pantalones.style.display="none";
		camisas.style.display="flex";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Zapatos" && window.innerWidth >= 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="flex";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Llaveros" && window.innerWidth >= 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="flex";
		bolsas.style.display="none";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Bolsas" && window.innerWidth >= 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="flex";
		conjuntos.style.display="none";
	}else if(selecciones.value == "Conjuntos" && window.innerWidth >= 600){
		pantalones.style.display="none";
		camisas.style.display="none";
		zapatos.style.display="none";
		llaveros.style.display="none";
		bolsas.style.display="none";
		conjuntos.style.display="flex";
	}
})
