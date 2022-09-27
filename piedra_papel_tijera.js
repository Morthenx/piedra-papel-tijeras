// realizar un piedra papel tijeras con condicionales y funciones

var ChosePlayer, ChoseIA;

function juegoPPT(ChosePlayer, ChoseIA){
    if(ChosePlayer=="piedra" && ChoseIA=="tijera"){
        console.log("Ganaste!");
    }else if (ChosePlayer=="tijera" && ChoseIA=="papel"){
        console.log("Ganaste!");
    }else if (ChosePlayer=="papel" && ChoseIA=="piedra"){
        console.log("Ganaste!");
    }else if(ChoseIA==ChosePlayer){
        console.log("Empate!");
    }else{
        console.log("Perdiste");
    }
}