validarPlaca=function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let vehiculo=obtenerTipoVehiculo(placa);

    if(erroresEstructura==null){
        let bandera=false;
        let provincia;
        mostrarTexto("lblResultado","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);

        if(provincia!==null){
            mostrarTexto("lblProvincia",provincia);
            bandera=true;
        }else{
            mostrarTexto("lblProvincia","Provincia Incorrecta");
        }

        if(bandera===true){
            mostrarTexto("lblVehiculo",vehiculo);
        }else{
            mostrarTexto("lblVehiculo","");
        }
    }else{
        mostrarTexto("lblResultado","ESTRUCTURA INCORRECTA\n");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia","")

    }


}