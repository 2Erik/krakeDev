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