probarAtributos=function(){
    persona={
        nombre : "Armando",
        apellido : "Paredes",
        edad : 25,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
    producto1={
        nombre : "pera",
        precio : 0.50,
        stock : 5
    }

    producto2={
        nombre : "papaya",
        precio : 1.25,
        stock : 10
    }

    console.log(producto1.nombre + " Nombre producto 1");
    console.log(producto2.precio + " precio producto 2");

    if(producto1.stock==producto2.stock){
        console.log("Ambos producros tienen el mismo stock");
    }else if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else{
        console.log("Producto 2 tiene mayor stock");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero:"54255458",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"1805050824",
        nombre:"Armando"
    }
    let cliente1={};
    cliente1.nombre="Salaz";
    cliente1.apellido="Paredes";
    cliente1.cedula="18563255"
}

probarIncrementoSaldo=function(){
    let cta={
        numero:"1215215",
        saldo:34.0
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

probarDeterminarMayor=function(){
    let per1={nombre:"Juan",edad:89};
    let per2={nombre:"Pepe",edad:50};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor != null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}