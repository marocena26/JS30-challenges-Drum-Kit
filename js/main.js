"use strict";

//-------------------CONST-------------------
const keysElements = document.querySelectorAll(".key");
//Cojon el valor de todos los elementos

//-------------------FUNCTIONS-------------------

//Función para activar el sonido y añadir la clase playing
function playSound(ev) {
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`); //Cojo el valor de la tecla que presione
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`); //Cojo el audio de la tecla que presione
  key.classList.add("playing"); //Al pulsar hago que la tecla coga los colores que hemos añadido en la clase "playing"
  audio.currentTime = 0; //el sonido vuelve al segundo 0 y puedo volver a dar a la tecla y hacer que suene sin tener que esperar a que el sonido anterior termine
  audio.play();
}

//Función para quitar la clase playing
function removeTransition() {
  this.classList.remove("playing"); //Quito la clase "playing"
}

keysElements.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
); //cuando la transición del css esté completa, transitionend quitará la clase "playing"

//EVENTS
window.addEventListener("keydown", playSound); //Evento al pulsar la tecla, llamo a playSound
