//push--- agregar al final

//Array inicial
let numArray=[1,2,3,4,5];

//funcion
function newNum(){
    //agrego elementos
    numArray.push(6,7); //agrega el 6 y 7 al final
    console.log(numArray);
}

newNum();

//eJEMPLO sTRING 

let txtArray= ["Ana", "Juan", "Diego", "Laura"];

function addCharacters(){
    txtArray.push("Chris","Maria");
    console.log(txtArray);
}

addCharacters();

//Eliminar elemento en el indice 0

let array=[1,2,3,4,5];
console.log(array);

let shiftArray= array.shift();

console.log(array);

// ahora debe ser 2,3,4,5


//eliminar el ultimo

ultimo= array.pop();
console.log(array);