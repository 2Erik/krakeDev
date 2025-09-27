calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resumen;

    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarTexto("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarTexto("txtCantidad");

    if(validarCampos(nombreProducto,"lblError1") & validarCampos(precioProducto,"lblError2") & validarCampos(cantidad,"lblError3")){
        let precioProductoFloat=parseFloat(precioProducto);
        let cantidadInt=parseInt(cantidad);

        if(esProductoValido(nombreProducto,"lblError1") & esCantidadValida(cantidadInt,"lblError3") & esPrecioValido(precioProductoFloat,"lblError2")){
            //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
            valorSubtotal=calcularSubtotal(precioProductoFloat,cantidadInt);
            //5. Mostrar valorSubtotal en el componente lblSubtotal
            mostrarTexto("lblSubtotal",valorSubtotal);
            //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
            valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidadInt);
            //7. Mostrar el resultado en el componente lblDescuento
            mostrarTexto("lblDescuento",valorDescuento);
            //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
            // El IVA debe calcularse sobre el valor del subtotal menos el descuento
            valorIVA=calcularIVA(valorSubtotal-valorDescuento);
            //9. Mostrar el resultado en el componente lblValorIVA    
            mostrarTexto("lblIVA",valorIVA);
            //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
            valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
            //11. Mostrar el resultado en el componente lblTotal
            mostrarTexto("lblTotal",valorTotal);
            //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
            resumen=fresumen(cantidad,nombreProducto,porcentajeDescuento,valorTotal);
            mostrarTexto("lblResumen",resumen);
        }


    }
}
limpiar = function () {
    mostrarTexto("lblSubtotal",0.0);
    mostrarTexto("lblDescuento",0.0);
    mostrarTexto("lblIVA",0.0);
    mostrarTexto("lblTotal",0.0);
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTexto("lblError1","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblError3","");
}

validarCampos=function(campo,idCampo){
    if(campo==""){
        mostrarTexto(idCampo,"CAMPO OBLIGATORIO");
        return false;
    }else{
        mostrarTexto(idCampo,"");
        return true;
    }
}

esProductoValido=function(producto,idProducto){
    if(producto.length>10){
        mostrarTexto(idProducto,"El nombre no puede tener mas de 10 caracteres");
        return false;
    }else{
        mostrarTexto(idProducto,"");
        return true
    }
}

esCantidadValida=function(cantidad,idCantidad){
    if(cantidad<0 || cantidad>100){
        mostrarTexto(idCantidad,"Corrija la cantidad");
        return false;
    }else{
        mostrarTexto(idCantidad,"");
        return true;
    }
}

esPrecioValido=function(precio,idPrecio){
    if(precio<0 || precio>50){
        mostrarTexto(idPrecio,"Precio no valido");
        return false;
    }else{
        mostrarTexto(idPrecio,"");
        return true;
    }
}

