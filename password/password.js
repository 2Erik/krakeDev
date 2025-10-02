ejecutarValidacio=function(){
    let password=recuperarTexto("txtPassword");
    let respuesta;

    respuesta=validarPassword(password);

    if(respuesta==""){
        mostrarTexto("lblRespuesta","PASSWORD CORRECTO");
    }else{
        mostrarTexto("lblRespuesta",respuesta);
    }

}

validarPassword = function(password){
    let errores="";
    let caracter;
    let banderaMayuscula=false;
    let banderaDigito=false;
    let banderaCaracterEspecial=false;

    if(password.length<8 || password.length>16){
        errores +="El password debe tener de 8 a 16 caracteres.\n";
    }

    for(let i=0;i<password.length;i++){
        caracter=password.charAt(i);
        if(esMayuscula(caracter,0)){
            banderaMayuscula=true;
        }
        if(esDigito(caracter,0)){
            banderaDigito=true;
        }
        if(esGuion(caracter,0)||esGuionBajo(caracter,0)||esAsterisco(caracter,0)){
            banderaCaracterEspecial=true;
        }
    }

    if(banderaMayuscula==false){
        errores += "La contasena debe tener almenos una Mayuscula.\n"
    }
    if(banderaDigito==false){
        errores += "La contrasena debe tener almenos un digito 0-9\n"
    }
    if(banderaCaracterEspecial==false){
        errores += "La contasena debe tener almenos uno de estos caracteres '*''-''_'\n"
    }

    if(errores != ""){
        return errores;
    }else{
        return "";
    }

}