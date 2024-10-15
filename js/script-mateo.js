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
    e.target.classList.add("no-border");
  } else {
    noteSounds[noteValue].pause();
    noteSounds[noteValue].currentTime = 0;
    e.target.classList.remove("no-border");
  }
}

function playNoteMouse(e, isDown) {
  const noteValue = e.target.getAttribute("data-note");
  if (noteValue) {
    playNote(noteValue, isDown);
  } else {
    console.error("Elemento no tiene atributo data-note");
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
  key.addEventListener("click", (e) => playNoteMouse(e, true));
  key.addEventListener("mouseup", (e) => playNoteMouse(e, false));
});

window.addEventListener("keydown", (e) => {
  if (e.shiftKey) changeOctave(-1);
  else if (e.key === 'Tab') changeOctave(1);
  else  playNoteKey(e, true);
});