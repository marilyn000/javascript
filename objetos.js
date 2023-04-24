var miAuto={
    marca:"Toyota",
    modelo:"Corolla",
    annio: 2020
};


//llamar en especifico
 miAuto.marca;

 var miAuto={
    marca:"Toyota",
    modelo:"Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log('Auto '+this.modelo+" "+this.annio)
    }
};


miAuto.detalleDelAuto();


function auto(marca,modelo,annio){
    this.marca= marca;
    this.modelo=modelo;
    this.annio=annio;

}

var autoNuevo= new auto("Tesla","Model 3", 2020);

var autoNuevo2= new auto("Tesla","Modelo X",2018);
var autoNuevo3= new auto("Toyota","Corolla",2020);