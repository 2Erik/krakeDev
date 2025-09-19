jugar=function(){
    let aleatirio;
    aleatirio=lanzarDado();
    cambiarTexto("lblNumero",aleatirio);
    if(aleatirio>3){
        cambiarTexto("lblRespuesta","Mayor a 3 Ganastes");
    }else{
        cambiarTexto("lblRespuesta","Menor a 3 Perdistes");
    }
}

lanzarDado=function(){
    let aleatorio=Math.random();
    let numeromultiplicado;
    let numeroEntero;
    let valorDado;
    numeromultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeromultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}