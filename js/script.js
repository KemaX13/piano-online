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
const instruccionesBtn = document.getElementById('instrucciones-btn');
const jugarBtn = document.getElementById('jugar-btn');
const charText = document.getElementById('char-text').querySelector('.font-graduate');

function escribir_instrucciones() {
    charText.textContent = 'haz clic en JUGAR y sigue las instrucciones para aprender a tocar la canción babySharK ¡Buena suerte!';
}
escribir_instrucciones();
instruccionesBtn.addEventListener('click', escribir_instrucciones);


function juego() {
    const NOTAS_CANCION = ['do2', 'do#2', 're#2'];
    const LETRAS_CANCION = ['A', 'B', 'D'];
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