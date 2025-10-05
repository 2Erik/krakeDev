//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta="";
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula=function(letra){
    let mayuscula=letra.charCodeAt(0);
    if(mayuscula>=65 && mayuscula<=90){
        return true;
    }else{
        return false;
    }
}

guardarPalabra=function(){
    let palabra=recuperarTexto("txtSecreta");
    let caracter;
    if(palabra.length===5){
        palabraSecreta="";
        for(let i=0;i<palabra.length;i++){
            caracter=palabra.charAt(i);
            if(esMayuscula(caracter)){
                palabraSecreta += caracter;
            }else{
                alert("La palabra debe ser Mayuscula y con 5 letras.");
                palabraSecreta="";
                break;
            }
        }
        console.log(palabraSecreta);
    }else{
        alert("La palabra debe ser Mayuscula y con 5 letras.");
    }
}

mostrarLetra=function(letra,posicion){
    if(posicion===0){
        mostrarTexto("div0",letra);
    }else if(posicion===1){
        mostrarTexto("div1",letra);
    }else if(posicion===2){
        mostrarTexto("div2",letra);
    }else if(posicion===3){
        mostrarTexto("div3",letra);
    }else if(posicion===4){
        mostrarTexto("div4",letra);
    }
}

validar=function(letra){
    let letraEncontrada = 0;
    for(let i=0;i<palabraSecreta.length;i++){
        if(letra===palabraSecreta.charAt(i)){
            mostrarLetra(letra,i);
            letraEncontrada++;
            coincidencias++;
            mostrarTextoEnCaja("txtLetra","");
        }
    }
    if(letraEncontrada===0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAorcado();
        mostrarTextoEnCaja("txtLetra","");
    }
}

ingresarLetra=function(){
    intentos++;
    let letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
        if(coincidencias===5){
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }else if(intentos===11){
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ASEPTAN MAYUSCULAS");
    }
}

mostrarAorcado=function(){
    if(errores===1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores===2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }else if(errores===3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }else if(errores===4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }else if(errores===5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }else if(errores===6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }else if(errores===7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }else if(errores===8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }else if(errores===9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}