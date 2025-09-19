calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=(monto*porcentajeDescuento)/100;
    return descuento;
}

calcularIVA=function(monto){
    let IVA;
    IVA=(monto*12)/100;
    return IVA;
}

calcularSubtotal=function(precio,cantidad){
    let total=precio*cantidad;
    return total;
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal=subtotal-descuento+iva;
    return valorTotal;
}

fresumen=function(cantidad,producto,porcentajeDescuento,total){
    return "Valor a pagar por "+cantidad+" "+producto+"s con "+porcentajeDescuento+ "% USD " +total;
}