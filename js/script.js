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
    let i = 0;
    let cancionFinalizada = false;

    function handleKeyPress(e) {
        if (cancionFinalizada) return;

        const notaPulsada = e.target.getAttribute('data-note');
        const notaActual = NOTAS_CANCION[i];
        charText.textContent = notaActual;

        if (notaPulsada === notaActual) {
            i++;
            if (i < NOTAS_CANCION.length) {
                charText.textContent = NOTAS_CANCION[i];
            } else {
                cancionFinalizada = true;
                charText.textContent = '¡Canción finalizada!';
            }
        }
    }

    keys.forEach(key => key.addEventListener('click', handleKeyPress));
    charText.textContent = NOTAS_CANCION[i];
}
jugarBtn.addEventListener('click', juego);