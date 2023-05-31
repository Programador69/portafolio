const insta = document.querySelector(".insta");
const face = document.querySelector(".face");
const twit = document.querySelector(".twit");
const whats = document.querySelector(".whats");
const sonidoInsta = new audio();
sonidoInsta.scr = sonidoInsta.mp3;

insta.addEventListener("click",funcionInsta);
function funcionInsta(){
	sonidoInsta.play();
}