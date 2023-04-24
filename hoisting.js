console.log(miNombre);//funcion para imprimir en la consola
var miNombre ="Mary";
miNombre="Mary";


var miNombre2=undefined;
console.log(miNombre2+" soy ese hoisting");
var miNombre2 ="Mary";


hola();
function hola(){
    console.log("Hola"+ miNombre);
}

var miNombre="Diego";