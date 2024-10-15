const keys = document.querySelectorAll(".key");

function playNote(noteValue, isDown) {
  const noteSound = new Audio("/sounds/studio-grand-" + noteValue + ".mp3");
  
  if(isDown) {
    noteSound.play();
    e.target.classList.add("no-border");
  } else {
    noteSound.pause();
    noteSound.currentTime = 0;
    e.target.classList.remove("no-border");
  }
}

function playNoteMouse(e, isDown) {
  const noteValue = e.target.getAttribute("data-note");
  playNote(noteValue, isDown);
}

function playNoteKey(e, isDown) {
  const noteValue = e.keyCode;
  
  for(var i = 0; i < keys.length; i++) {
    if(keys[i].getAttribute("data-key") == noteValue) {
      playNote(keys[i].getAttribute("data-note"), isDown);
      break;
    }
  }
}

keys.forEach(key => {
  key.addEventListener("click", (e) => playNoteMouse(e, true));
  key.addEventListener("mouseup", (e) => playNoteMouse(e, false));
});

// function playNote(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
//     key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//   if (!key) return;

//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;
//   audio.currentTime = 0;
//   audio.play();
// }

window.addEventListener("keydown", (e) => playNoteKey(e, true));