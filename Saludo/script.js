console.log ("Se nota que todavía me extrañas");

setInterval(cambiarSaludo, 4000);

function cambiarSaludo() {
  
  let frase = document.getElementsByTagName("h2")[1].innerHTML;
  if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre") {
    document.getElementsByTagName("h2")[1].innerHTML = "¡Impongo moda para las niñas!";
  } else {
    document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}
