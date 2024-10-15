const keys = document.querySelectorAll(".key");
const noteSounds = {};
const keyMap = {};
let currentOctave = 3;

keys.forEach((key, i) => {
  const dataNote = key.getAttribute("data-key");
  keyMap[dataNote] = key.getAttribute("data-note");
});

function playNote(noteValue, isDown) {
  if (!noteSounds[noteValue])
    noteSounds[noteValue] = new Audio("/sounds/studio-grand-" + noteValue + ".mp3");
  
  if (isDown) {
    noteSounds[noteValue].play();
  } else {
    noteSounds[noteValue].pause();
    noteSounds[noteValue].currentTime = 0;
  }
}

function playNoteMouse(e, isDown) {
  const noteValue = e.target.getAttribute("data-note");
  
  if (noteValue) {
    playNote(noteValue, isDown);
  } else {
    console.error("Elemento no tiene atributo data-note");
  }

  if(isDown) {
    e.target.className += " no-border";
  } else {
    e.target.classList.remove("no-border");
  }
}

function playNoteKey(e, isDown) {
  const noteValue = e.keyCode;
  if (keyMap[noteValue]) {
    playNote(keyMap[noteValue], isDown);
  }
}

function changeOctave(i) {
  currentOctave += i;
}

keys.forEach(key => {
  key.addEventListener("mousedown", (e) => playNoteMouse(e, true));
  key.addEventListener("mouseup", (e) => playNoteMouse(e, false));
});

window.addEventListener("keydown", (e) => {
  if (e.shiftKey) changeOctave(-1);
  else if (e.key === 'Tab') changeOctave(1);
  else  playNoteKey(e, true);
});

const botonTeclado =  document.querySelector (".keyboard")
function cambioLetras(){
   for( let i = 0; i <keys.length; i++) {
    keys[i].querySelector('.keyboard-key').innerHTML = keys[i].getAttribute("data-key")
   }
  }
botonTeclado.addEventListener("click", cambioLetras);


const botonSolfeo =  document.querySelector (".solfeo")
function cambioNotas(){
    for( let i = 0; i <keys.length; i++) {
     keys[i].querySelector('.keyboard-key').innerHTML = keys[i].getAttribute("data-note")
    }
   }
 botonSolfeo.addEventListener("click", cambioNotas);

 const instruccionesBtn = document.getElementById('instrucciones-btn');
const jugarBtn = document.getElementById('jugar-btn');
const charText = document.getElementById('char-text').querySelector('.font-graduate');

function escribir_instrucciones() {
    charText.textContent = 'haz clic en JUGAR y sigue las instrucciones para aprender a tocar la canción babySharK ¡Buena suerte!';
}
escribir_instrucciones();
instruccionesBtn.addEventListener('click', escribir_instrucciones);


function juego() {
    const NOTAS_CANCION = ["re3", "mi3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "re3", "mi3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "fa#3"];
    const LETRAS_CANCION = ["S", "D", "R", "R", "R", "R", "R", "R", "S", "D", "R", "R", "R", "R", "R", "R","R", "R", "R", "E"];
    let i = 0;
    let cancionFinalizada = false;
    function comprobarTecla(e) {
        if (cancionFinalizada) return;
        const notaPulsada = e.target.getAttribute('data-note');
        const letraPulsada = e.target.getAttribute('data-key');
        const notaActual = NOTAS_CANCION[i];
        const letraActual = LETRAS_CANCION[i];
        charText.textContent = notaActual + ' / ' + letraActual;

        if ((notaPulsada === notaActual) || (letraPulsada === letraActual)) {
            i++;
            if (i < NOTAS_CANCION.length) {
                charText.textContent = NOTAS_CANCION[i] + ' / ' + LETRAS_CANCION[i];
            } else {
                cancionFinalizada = true;
                charText.textContent = '¡Canción finalizada!';
            }
        }
        else {
            charText.textContent = '¡Error! Inténtalo de nuevo';
        }
    }

    keys.forEach(key => key.addEventListener('click', comprobarTecla));
    charText.textContent = NOTAS_CANCION[i] + ' / ' + LETRAS_CANCION[i];
}
jugarBtn.addEventListener('click', juego);
 

