calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=(monto*porcentajeDescuento)/100;
    return parseFloat(descuento.toFixed(2));
}

calcularIVA=function(monto){
    let IVA;
    IVA=(monto*12)/100;
    return parseFloat(IVA.toFixed(2));
}

calcularSubtotal=function(precio,cantidad){
    let total=precio*cantidad;
    return parseFloat(total.toFixed(2));
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal=subtotal-descuento+iva;
    return parseFloat(valorTotal.toFixed(2));
}

fresumen=function(cantidad,producto,porcentajeDescuento,total){
    return "Valor a pagar por "+cantidad+" "+producto+"s con "+porcentajeDescuento+ "% USD " +total;
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=subtotal*0.03;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=subtotal*0.04;
    }else if(cantidad>=12){
        descuento=subtotal*0.05;
    }
    return descuento;
}

