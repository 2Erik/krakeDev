numeroAleatorio=function(){
    let numeroAleatorio=Math.random();
    let aleatorioEntero=parseInt((numeroAleatorio*100)+1);
    return aleatorioEntero;
}

generarAleatorio=function(){
    let aleatorio;
    let arregloAleatorio=[];
    let numeroUsuario=recuperarInt("txtNumero");
    
    if(isNaN(numeroUsuario)||numeroUsuario<5 ||numeroUsuario>20){
        alert("Debe ser un numero enre 5 y 20");
        return;
    }

    for(let i=0;i<numeroUsuario;i++){
        aleatorio=numeroAleatorio();
        arregloAleatorio.push(aleatorio);
    }

    mostrarResultado(arregloAleatorio);
}

mostrarResultado=function(arregloNumero){
    let cmpTabla=document.getElementById("divTabla");
    let tabla="<table><tr><th># ALEATORIO</th><tr>";
    for(let i=0;i<arregloNumero.length;i++){
        tabla+="<tr><td>";
        tabla+=arregloNumero[i];
        tabla+="</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}