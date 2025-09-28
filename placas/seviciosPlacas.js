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

