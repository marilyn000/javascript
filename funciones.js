//Declarativas

function miFuncion(){
    return 3;
}


//Expresión
var miFuncion = function(a,b){
    return a+b;
}


miFuncion();

function saludarEstudiantes(estudiante){
    console.log(estudiante);
}
saludarEstudiantes("Diego");

function saludarEstudiantes(estudiante){
    console.log('Hola ${estudiante}');
}

function sumar (a,b){
    var resultado=a+b;
    return resultado;
}

sumar(1,2);

function sumar (a,b){
    return a+b;
}


var miNombre="Mary";
function nombre(){
    var miApellido="Dias"
    console.log(miNombre+""+miApellido);
}
nombre();

