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