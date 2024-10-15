let bloqueCurso = document.getElementById("piano-class-btn");
function agrandarCurso() {
    bloqueCurso.style.transform = "scale(1.1)"; 
}
function reducirCurso() {
    bloqueCurso.style.transform = "scale(1)";
}
bloqueCurso.addEventListener('mouseover', agrandarCurso); 
bloqueCurso.addEventListener('mouseout', reducirCurso);



let bloqueCursoGuitarra = document.getElementById("guitar-class-btn");
function agrandarCursoGuitarra() {
    bloqueCursoGuitarra.style.transform = "scale(1.1)"; 
}
function reducirCursoGuitarra() {
    bloqueCursoGuitarra.style.transform = "scale(1)";
}
bloqueCursoGuitarra.addEventListener('mouseover', agrandarCursoGuitarra); 
bloqueCursoGuitarra.addEventListener('mouseout', reducirCursoGuitarra);


let bloqueCursoFlauta = document.getElementById("flute-class-btn");
function agrandarCursoFlauta() {
    bloqueCursoFlauta.style.transform = "scale(1.1)"; 
}

function reducirCursoFlauta() {
    bloqueCursoFlauta.style.transform = "scale(1)";
}

bloqueCursoFlauta.addEventListener('mouseover', agrandarCursoFlauta); 
bloqueCursoFlauta.addEventListener('mouseout', reducirCursoFlauta);