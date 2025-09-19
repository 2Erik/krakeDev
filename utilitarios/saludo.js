saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura")
    let mensajeBinvenida="bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblresultado",mensajeBinvenida);
    mostrarImagen("imgSaludo","./imagenes/saludo.gif")
    mostrarTextocaja("txtNombre","")
}

