let texto = "";
let contador = 0;
let textArea = document.querySelector(".salida")
const boton_uno = document.querySelector(".teclado_1");
const boton_dos = document.querySelector(".teclado_2");
const boton_tres = document.querySelector(".teclado_3");
const boton_cuatro = document.querySelector(".teclado_4");
const boton_cinco = document.querySelector(".teclado_5");
const boton_seis = document.querySelector(".teclado_6");
const boton_siete = document.querySelector(".teclado_7");
const boton_ocho = document.querySelector(".teclado_8");
const boton_nueve = document.querySelector(".teclado_9");
const boton_suma = document.querySelector(".teclado_mas");
const boton_cero = document.querySelector(".teclado_0");
const boton_gato = document.querySelector(".teclado_gato");

boton_uno.addEventListener("click", btnUno);
function btnUno(){
	texto += "1";
	textArea.value = texto;
}

btnDos= ()=>{
	if(contador == 1){
		texto += "2";
		contador = 0;
	}else if(contador ==2){
		texto += "a";
		contador = 0;
	}else if(contador ==3){
		texto += "b";
		contador = 0;
	}else if(contador ==4){
		texto += "c";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_dos.addEventListener("click", cantidadDos);
function cantidadDos(){
	contador++;
	setTimeout(btnDos,1000);
}


btnTres= ()=>{
	if(contador == 1){
		texto += "3";
		contador = 0;
	}else if(contador ==2){
		texto += "d";
		contador = 0;
	}else if(contador ==3){
		texto += "e";
		contador = 0;
	}else if(contador ==4){
		texto += "f";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_tres.addEventListener("click", cantidadTres);
function cantidadTres(){
	contador++;
	setTimeout(btnTres,1000);
}


btnCuatro= ()=>{
	if(contador == 1){
		texto += "4";
		contador = 0;
	}else if(contador ==2){
		texto += "g";
		contador = 0;
	}else if(contador ==3){
		texto += "h";
		contador = 0;
	}else if(contador ==4){
		texto += "i";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_cuatro.addEventListener("click", cantidadCuatro);
function cantidadCuatro(){
	contador++;
	setTimeout(btnCuatro,1000);
}


btnCinco= ()=>{
	if(contador == 1){
		texto += "5";
		contador = 0;
	}else if(contador ==2){
		texto += "j";
		contador = 0;
	}else if(contador ==3){
		texto += "k";
		contador = 0;
	}else if(contador ==4){
		texto += "l";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_cinco.addEventListener("click", cantidadCinco);
function cantidadCinco(){
	contador++;
	setTimeout(btnCinco,1000);
}


btnSeis= ()=>{
	if(contador == 1){
		texto += "6";
		contador = 0;
	}else if(contador ==2){
		texto += "m";
		contador = 0;
	}else if(contador ==3){
		texto += "n";
		contador = 0;
	}else if(contador ==4){
		texto += "o";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_seis.addEventListener("click", cantidadSeis);
function cantidadSeis(){
	contador++;
	setTimeout(btnSeis,1000);
}


btnSiete= ()=>{
	if(contador == 1){
		texto += "7";
		contador = 0;
	}else if(contador ==2){
		texto += "p";
		contador = 0;
	}else if(contador ==3){
		texto += "q";
		contador = 0;
	}else if(contador ==4){
		texto += "r";
		contador = 0;
	}else if(contador ==5){
		texto += "s";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_siete.addEventListener("click", cantidadSiete);
function cantidadSiete(){
	contador++;
	setTimeout(btnSiete,1000);
}


btnOcho= ()=>{
	if(contador == 1){
		texto += "8";
		contador = 0;
	}else if(contador ==2){
		texto += "t";
		contador = 0;
	}else if(contador ==3){
		texto += "u";
		contador = 0;
	}else if(contador ==4){
		texto += "v";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_ocho.addEventListener("click", cantidadOcho);
function cantidadOcho(){
	contador++;
	setTimeout(btnOcho,1000);
}


btnNueve= ()=>{
	if(contador == 1){
		texto += "9";
		contador = 0;
	}else if(contador ==2){
		texto += "w";
		contador = 0;
	}else if(contador ==3){
		texto += "x";
		contador = 0;
	}else if(contador ==4){
		texto += "y";
		contador = 0;
	}else if(contador ==5){
		texto += "z";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_nueve.addEventListener("click", cantidadNueve);
function cantidadNueve(){
	contador++;
	setTimeout(btnNueve,1000);
}


btnMas= ()=>{
	if(contador == 1){
		texto += "*";
		contador = 0;
	}else if(contador ==2){
		texto += "+";
		contador = 0;
	}
	
	textArea.value = texto;
}

boton_suma.addEventListener("click", cantidadMas);
function cantidadMas(){
	contador++;
	setTimeout(btnMas,300);
}


boton_cero.addEventListener("click", btnCero);
function btnCero(){
	texto += "0";
	textArea.value = texto;
}


boton_gato.addEventListener("click", btnGato);
function btnGato(){
	texto += "#";
	textArea.value = texto;
}