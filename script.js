let bloqueCurso = document.getElementById("piano-class-btn");

function agrandarCurso() {
    bloqueCurso.style.transform = "scale(1.5)"; 
}

function reducirCurso() {
    bloqueCurso.style.transform = "scale(1)";
}

bloqueCurso.addEventListener('mouseover', agrandarCurso); 
bloqueCurso.addEventListener('mouseout', reducirCurso);

