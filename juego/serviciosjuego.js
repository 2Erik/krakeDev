obtenerAleatorio=function(){
    let randon=Math.random()*3;;
    let randonInt=parseInt(randon)+1;
    return randonInt;
}

generarElemento=function(){
    let numero=obtenerAleatorio();
    if(numero===1){
        return "piedra";
    }else if(numero===2){
        return "papel"
    }else if(numero===3){
        return "tijera";
    }
}

determinarGanador=function(eleccionJugador1, eleccionJugador2){
    if(eleccionJugador1===eleccionJugador2){
        return 0;
    }

    if(eleccionJugador1==="piedra" && eleccionJugador2==="papel"){
        return 2;
    }else if(eleccionJugador1==="papel" && eleccionJugador2==="tijera"){
        return 2
    }else if(eleccionJugador1==="tijera" && eleccionJugador2==="piedra"){
        return 2;
    }else{
        return 1;
    }
}

generarRuta=function(nombre){
    if(nombre==="piedra"){
        mostrarImagen("imgJugar","imagenes/piedra.png");
    }else if(nombre==="papel"){
        mostrarImagen("imgJugar","imagenes/papel.png");
    }else if(nombre==="tijera"){
        mostrarImagen("imgJugar","imagenes/tijera.png");
    }
}