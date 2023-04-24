//if
if (true){
    console.log("Hola");
} else {
    console.log("soy falso");
}

var edad=18;

if (edad===18){
    console.log("puedes votar,será tu 1ra votación");
}else if(edad>18){
    console.log("Puedes votar de nuevo")
}
 else {
    console.log("Aún no puedes votar");
}

condition ? true:false;

var numero =1;
var resultado= numero===1 ?"si soy un uno" : "No soy un uno";


var jugador = "piedra";
var compu= "papel" ;

function juego (jugador, compu){

    if (jugador===compu){
        console.log("Empate");
    }else if (jugador==="tijeras" && compu==="papel"){
        console.log("Ganaste");
    }else if (jugador==="papel" && compu==="piedra"){
        console.log("Ganaste");
    }else if (jugador==="piedra" && compu==="tijeras"){
        console.log("Ganaste");
    }else{
        console.log("Perdiste");
    }
}
juego(jugador, compu);

//switch 

var numer=1;

switch(numer){
    case 1:
        console.log("soy 1");
        break;
    case 10:
        console.log("soy 10");
        break;
    case 100:
        console.log("soy 100");
        break;
    default:
        console.log("no soy nada");  
}





var jugador ="tijeras";
var compu= "papel" ;

function juego (jugador, compu){

    switch (jugador,compu){
        case(jugador===compu):
            console.log("Empate");
            break;
        case (jugador==="tijeras" && compu==="papel"):
            console.log("Ganaste");
            break;
        case (jugador==="papel" && compu==="piedra"):
            console.log("Ganaste");
            break;
        case (jugador==="piedra" && compu==="tijeras"):
            console.log("Ganaste");
            break;
        default:
            console.log("Perdiste");
    }
}
        
juego(jugador, compu);

//juego 

export function solution(article) {
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
        break;
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
        break;
      case "cable":
        return "¡Hay un cable en mi bota!";
        break;
      default:
        return "Articulo no encontrado";
    }
  }
  
  solution('computadora');
  solution('celular');
  solution('cable');
  solution('ornitorrinco');