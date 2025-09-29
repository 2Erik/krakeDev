let puntosUsuario=0;
let puntosComputadora=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
    let ganador;
    generarRuta(elemento);

    if(puntosUsuario<5 && puntosComputadora<5){
        ganador=determinarGanador(seleccionado,elemento);
        if(ganador===0){
            mostrarTexto("lblResultado","EMPATE");
        }else if(ganador===1){
            mostrarTexto("lblResultado","GANASTES LA PARTIDO");
            puntosUsuario += 1;
            mostrarTexto("lblPuntosUsuario",puntosUsuario);
        }else{
            mostrarTexto("lblResultado","PERDISTES LA PARTIDA");
            puntosComputadora += 1;
            mostrarTexto("lblPuntosPC",puntosComputadora);
        }
    }else if(puntosUsuario===5){
        mostrarTexto("lblGanador","HAS GANADO EL JUEGO");
    }else{
        mostrarTexto("lblGanador","EL COMPUTADOR TE A VENCIDO");
    }
}

limpiar=function(){
    mostrarTexto("lblGanador","");
    mostrarTexto("lblResultado","");
    mostrarTexto("lblPuntosPC","0");
    mostrarTexto("lblPuntosUsuario","0");
    puntosComputadora=0;
    puntosUsuario=0;
}