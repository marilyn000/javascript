var estudiantes=["Maria","Sergio","Rosa","Daniel"];

function saludar(estudiante){
    console.log('Hola ' + estudiante);
}


for(var i =0; i< estudiantes.length;i++){
    //console.log(estudiantes[i]);
    saludar(estudiantes[i]);

}


for(var estudiante of estudiantes){
    saludar(estudiante);
}

//while 

function saludarEs(estudiante){
    console.log("Hola, "+ estudiante);
}

while(estudiante.length>0){
    console.log(estudiantes);
    var estudiante= estudiantes.shift();
    saludarEs(estudiante);
}