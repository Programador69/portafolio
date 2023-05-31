const titulo = document.querySelector(".titulo");
const video = document.querySelector(".video");

titulo.addEventListener("click",funcionVideo);
function funcionVideo(){
	video.classList.toggle("ocultar");
}