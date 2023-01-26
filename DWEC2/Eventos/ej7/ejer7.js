"use strict";


// Simplemente, esta función cuando esta encima, controla el evento de 
// "estamos con la bola encima, podemos soltar"
function allowDrop(ev) {
  // Este código evita el comportamiento por defecto de este evento
  ev.preventDefault();
}

// Funcion a la que llamamos cuando se produce el "drag"
// Hacemos que el evento pueda transferir un dato ("informacion")

function drag(ev) {
  ev.dataTransfer.setData("Informacion", ev.target.id);
}


// Funcion a la que llamamos cuando se produce el "drop"
function drop(ev) {
  // Prevenimos su comportamiento por defecto
  ev.preventDefault();
  
  // Hacemos que el evento reciba un dato ("texto")
  let data = ev.dataTransfer.getData("Informacion");

  ev.target.appendChild(document.getElementById(data));

}

// Funcion que se ejecuta cuando se ha cargado todo el DOM
function inicio(){
  document.getElementById("bola").ondragstart=drag;

  document.getElementById("div1").ondragover=allowDrop;
  document.getElementById("div2").ondragover=allowDrop;

  document.getElementById("div1").ondrop=drop;
  document.getElementById("div2").ondrop=drop;
  
}

// Asignamos una funcion de inicio asociada a que se cargue todo el DOM
window.onload=inicio;