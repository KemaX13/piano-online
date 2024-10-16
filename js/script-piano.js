const keys = document.querySelectorAll(".key");
const keyMap = Object.fromEntries(
  Array.from(keys).map(key => [key.dataset.key, key.dataset.note])
);

const activeNotes = new Set();

function playNote(noteValue, isDown, element) {
  if (isDown && activeNotes.has(noteValue)) return;
  const noteSound = new Audio(`/sounds/studio-grand-${noteValue}.mp3`);
  
  if (isDown) {
    activeNotes.add(noteValue);
    noteSound.play();
    element.classList.add("no-border");
  } else {
    activeNotes.delete(noteValue);
    element.classList.remove("no-border");
  }
}

function handleNoteEvent(e, isDown) {
  const noteValue = e.type.startsWith('mouse') ? e.target.dataset.note : keyMap[e.key]; console.log(e);

  if (noteValue) playNote(noteValue, isDown, e.target);
}

keys.forEach(key => {
  key.addEventListener("mousedown", e => handleNoteEvent(e, true));
  key.addEventListener("mouseup", e => handleNoteEvent(e, false));
});

window.addEventListener("keydown", e => handleNoteEvent(e, true));
window.addEventListener("keyup", e => handleNoteEvent(e, false));

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
    const NOTAS_CANCION = ["re3", "mi3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "re3", "mi3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "sol3", "solb3"];
    const LETRAS_CANCION = ["s", "d", "g", "g", "g", "g", "g", "g", "s", "d", "g", "g", "g", "g", "g", "g","g", "g", "t"];
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
