const boton = document.querySelector(".boton");

	boton.addEventListener("click", ()=> {
		let texto = document.querySelector(".input").value;
		let enunciacion = new SpeechSynthesisUtterance(texto);
		speechSynthesis.speak(enunciacion);
	})