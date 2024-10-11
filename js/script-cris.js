const botonTeclado =  document.querySelector (".keyboard")
/* esto es la variable del boton teclado y luego queda hacer la del otro boton */
/* array para las letras*/

let arrayKeyboardKeyNuevo = ["A","S", "D", "F", "G", "H,", "J"];
let arrayKeyboardKeyViejo = document.querySelectorAll(".keyboard-key");


/* array para las notas*/


/* hacer una función para que si toco el boton de la nota, coge el array de las notas
hacer otra función  y si toco el boton del dibujo del teclado, coge el array de las letras ((no necesariamente dos funciones, pdoría hacerlo en una)*/


function cambioLetras(){
    for (var i = 0; i < arrayKeyboardKeyViejo.length; i++) {
        arrayKeyboardKeyViejo[i].innerHTML = arrayKeyboardKeyNuevo[i];
      }
   
  }
botonTeclado.addEventListener("click", cambioLetras)




/* usamos for each para que cambie cada letra del teclado del piano por las teclas del teclado*/

/* añadir los eventos a cada boton (add event listener onlick etc..)*/



