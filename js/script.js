const keys = document.querySelectorAll(".key");

function playNote(e) {
    const noteValue = e.target.getAttribute('data-note');
    const noteSound = new Audio("/sounds/studio-grand-" + noteValue + ".mp3");
    
    noteSound.play();
    e.target.className += " no-border";
}

function resetNote(e) {
    const noteValue = e.target.getAttribute('data-note');
    const noteSound = new Audio("/sounds/studio-grand-" + noteValue + ".mp3");

    noteSound.pause();
    noteSound.currentTime = 0;
    e.target.classList.remove("no-border");
}

keys.forEach(key => key.addEventListener("mousedown", playNote));
keys.forEach(key => key.addEventListener("mouseup", resetNote));


const botonTeclado =  document.querySelector (".keyboard")
let arrayKeyboardKeyNuevo = ["A","B", "C","D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "U", "V", "W", "Y"];
let arrayKeyboardKeyViejo = document.querySelectorAll(".keyboard-key");
function cambioLetras(){
    for (var i = 0; i < arrayKeyboardKeyViejo.length; i++) {
        arrayKeyboardKeyViejo[i].innerHTML = arrayKeyboardKeyNuevo[i];
      }
  }
botonTeclado.addEventListener("click", cambioLetras)


const botonSolfeo =  document.querySelector (".solfeo")
let arraySolfeoNuevo = ["do2","do#2", "re2","re#2", "mi2", "fa2", "fa#2", "sol2","sol#2", "la2", "la#2", "si2", "do4", "do#4", "re4", "re#4", "mi4", "fa4", "fa#4", "sol4", "sol#4", "la4", "la#4", "si4"];
function cambioNotas(){
    for (var i = 0; i < arrayKeyboardKeyViejo.length; i++) {
        arrayKeyboardKeyViejo[i].innerHTML = arraySolfeoNuevo[i];
      }
}
document.addEventListener('DOMContentLoaded', function() {
    const instruccionesBtn = document.getElementById('instrucciones-btn');
    const jugarBtn = document.getElementById('jugar-btn');
    const charText = document.getElementById('char-text').querySelector('p');

    // Set default text to instructions
    charText.textContent = 'Here are the instructions...';

    instruccionesBtn.addEventListener('click', function() {
        charText.textContent = 'Here are the instructions...';
    });

    jugarBtn.addEventListener('click', function() {
        charText.textContent = 'Here are the notes of the song...';
    });
});

/*botonSolfeo.addEventListener("click", jugarTocarCancion)

const notasCancion =  document.querySelector (".inst-play")
let arrayCancion = ["re", "mi", "sol", "sol", "sol", "sol", "sol", "sol","re", "mi", "sol", "sol", "sol" "sol", "sol", "sol","re", "mi", "sol", "sol", "sol" "sol", "sol", "sol", "sol", "sol", "fa#"];
function jugarTocarCancion(){
    if (var i = 0; i < arrayCancion.length; i++) {
        arrayKeyboardKeyViejo[i].innerHTML = arraySolfeoNuevo[i];
      }
  }
notasCancion.addEventListener("click", jugarTocarCancion)*/

