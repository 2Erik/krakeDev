function validarEstructura(placa) {
    let errores = "";

    if (placa.length !== 7 && placa.length !== 8) {
        errores = "La placa debe tener 7 o 8 caracteres.\n";
    } else {
        if (!esMayuscula(placa, 0)) {
            errores += "En la primera posicion se espera una letra mayuscula.\n";
        }
        if (!esMayuscula(placa, 1)) {
            errores += "En la segunda posicion se espera una letra mayuscula.\n";
        }
        if (!esMayuscula(placa, 2)) {
            errores += "En la tercera posicion se espera una letra mayuscula.\n";
        }

        if (!esGuion(placa, 3)) {
            errores += "En la cuarta posicion se espera un guion ('-').\n";
        }

        if (placa.length === 7) {
            if (!esDigito(placa, 4)) {
                errores += "En la quinta posicion se espera un numero.\n";
            }
            if (!esDigito(placa, 5)) {
                errores += "En la sexta posicion se espera un numero.\n";
            }
            if (!esDigito(placa, 6)) {
                errores += "En la septima posicion se espera un numero.\n";
            }
        } else if (placa.length === 8) {
            if (!esDigito(placa, 4)) {
                errores += "En la quinta posicion se espera un numero.\n";
            }
            if (!esDigito(placa, 5)) {
                errores += "En la sexta posicion se espera un numero.\n";
            }
            if (!esDigito(placa, 6)) {
                errores += "En la septima posicion se espera un numero.\n";
            }
            if (!esDigito(placa, 7)) {
                errores += "En la octava posicion se espera un numero.\n";
            }
        }
    }

    if (errores !== "") {
        return errores;
    } else {
        mostrarTexto("lblErrores","")
        return null;
    }
}

obtenerProvincia=function(placa){
    let letra = placa.charCodeAt(0);

    if (letra === 65) {
        return "Azuay";
    } else if (letra === 66) {
        return "Bolivar";
    } else if (letra === 67) {
        return "Carchi";
    } else if (letra === 69) {
        return "Esmeraldas";
    } else if (letra === 71) {
        return "Guayas";
    } else if (letra === 72) {
        return "Chimborazo";
    } else if (letra === 73) {
        return "Imbabura";
    } else if (letra === 74) {
        return "Santo Domingo de los Tsachilas";
    } else if (letra === 75) {
        return "Sucumbios";
    } else if (letra === 76) {
        return "Loja";
    } else if (letra === 77) {
        return "Manabi";
    } else if (letra === 78) {
        return "Napo";
    } else if (letra === 79) {
        return "El Oro";
    } else if (letra === 80) {
        return "Pichincha";
    } else if (letra === 81) {
        return "Orellana";
    } else if (letra === 82) {
        return "Los Rios";
    } else if (letra === 83) {
        return "Pastaza";
    } else if (letra === 84) {
        return "Tungurahua";
    } else if (letra === 85) {
        return "Canar";
    } else if (letra === 86) {
        return "Morona Santiago";
    } else if (letra === 87) {
        return "Galapagos";
    } else if (letra === 88) {
        return "Cotopaxi";
    } else if (letra === 89) {
        return "Santa Elena";
    } else if (letra === 90) {
        return "Zamora Chinchipe";
    } else {
        return null;
    }
}

obtenerTipoVehiculo=function(placa){
    let tipoVehiculo=placa.charCodeAt(1);

    if(tipoVehiculo===65 || tipoVehiculo===90){
        return "Vehiculo Comercial";
    }else if(tipoVehiculo===69){
        return "Vehiculo Gubernamental";
    }else if(tipoVehiculo===88){
        return "Vehiculo de uso oficial";
    }else if(tipoVehiculo===83){
        return "Vehiculo del gobierno provincial";
    }else if(tipoVehiculo===77){
        return "Vehiculo municipales";
    }else{
        return "Vehiculo particular";
    }
}

obtenerDiaPicoYPlaca=function(placa){
    let indicePicoPlaca=placa.length-1;
    let picoPlaca=placa.charCodeAt(indicePicoPlaca);
    if(picoPlaca===49 || picoPlaca===50){
        return "Lunes";
    }else if(picoPlaca===51 ||picoPlaca===52){
        return "Martes";
    }else if(picoPlaca===53 || picoPlaca===54){
        return "Miercoles";
    }else if(picoPlaca===55 || picoPlaca===56){
        return "Jueves";
    }else if(picoPlaca===57 || picoPlaca===48){
        return "Viernes";
    }
}

