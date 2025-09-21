calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual<300000){
        return 16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        return 15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        return 14;
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        return 13;
    }else if(ingresoAnual>=2000000){
        return 12;
    }
}

calcularCapacidadPago=function(edad, ingresos, egresos){
    let cuotaMensualPagar;
    if(edad>50){
        cuotaMensualPagar = (ingresos-egresos)*0.3;
    }else if(edad > 18 && edad >= 50){
        cuotaMensualPagar = (ingresos-egresos)*0.4;
    }
    return cuotaMensualPagar;
}

calcularDescuento=function(precio, cantidad){
    let valorPagar;
    if(cantidad<3){
        valorPagar=precio*cantidad;
    }else if(cantidad>=3 && cantidad<=5){
        valorPagar=(precio*cantidad)*0.02;
    }else if(cantidad>=6 && cantidad<=11){
        valorPagar=(precio*cantidad)*0.03;
    }else if(cantidad>=12){
        valorPagar=(precio*cantidad)*0.04;
    }
    return valorPagar;
}

determinaColesterolILDL=function(nivelColesterol){
    let categoriaLDL;
    if (nivelColesterol<100){
        categoriaLDL="Optimo";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        categoriaLDL="Casi Optimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        categoriaLDL="Limite Alto";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        categoriaLDL="Alto";
    }else if(nivelColesterol>=190){
        categoriaLDL="Muy Alto";
    }
    return categoriaLDL;
}

validarClave=function(calve){
    if(calve.length>=8 && calve.length<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    if(caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 || notaFisica>90 || notaGemetria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 || notaFisica>90 && notaGemetria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 && notaFisica>90 || notaGemetria>90){
        if(notaFisica>notaMatematica){
            return true;
        }
    }else{
        return false;
    }
}