// const keys = document.querySelectorAll(".key");

// function playNote(noteValue, isDown) {
//   const noteSound = new Audio("/sounds/studio-grand-" + noteValue + ".mp3");
  
//   if(isDown) {
//     noteSound.play();
//     e.target.classList.add("no-border");
//   } else {
//     noteSound.pause();
//     noteSound.currentTime = 0;
//     e.target.classList.remove("no-border");
//   }
// }

// function playNoteMouse(e, isDown) {
//   const noteValue = e.target.getAttribute("data-note");
//   playNote(noteValue, isDown);
// }

// function playNoteKey(e, isDown) {
//   const noteValue = e.keyCode;
  
//   for(var i = 0; i < keys.length; i++) {
//     if(keys[i].getAttribute("data-key") == noteValue) {
//       playNote(keys[i].getAttribute("data-note"), isDown);
//       break;
//     }
//   }
// }

// keys.forEach(key => {
//   key.addEventListener("mousedown", (e) => playNoteMouse(e, true));
//   key.addEventListener("mouseup", (e) => playNoteMouse(e, false));
// });

// window.addEventListener("keydown", (e) => playNoteKey(e, true));

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
  const noteValue = e.type.startsWith('mouse') ? 
    e.target.dataset.note : 
    keyMap[e.keyCode];
  
  if (noteValue) playNote(noteValue, isDown, e.target);
}

keys.forEach(key => {
  key.addEventListener("mousedown", e => handleNoteEvent(e, true));
  key.addEventListener("mouseup", e => handleNoteEvent(e, false));
});

window.addEventListener("keydown", e => handleNoteEvent(e, true));
window.addEventListener("keyup", e => handleNoteEvent(e, false));
