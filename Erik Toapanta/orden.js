let personas =[
    {nombre: "Marcos", edad: 18},
    {nombre: "Roberto", edad: 15},
    {nombre: "Kate", edad: 25},
    {nombre: "Diana", edad: 12},
    {nombre: "Benja", edad: 5}
];

agregarPersona=function(){
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
    let error=true;

    mostrarTexto("lblErrorNombre","");
    mostrarTexto("lblErrorEdad","");
    

    if(nombre.length<3){
        mostrarTexto("lblErrorNombre","El nombre debe tener mas de 2 caracteres.");
        error=false;
    }

    if(edad<0 || edad>100){
        mostrarTexto("lblErrorEdad","La edad debe estar en el rango de 0 a 100");
        error=false
    }

    if(error){
        nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarTabla();
    }
}

mostrarTabla=function(){
    let cmpTabla=document.getElementById("tablaPersonas");
    let tabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+"</tr>";

    for(let i=0;i<personas.length;i++){
        tabla +="<tr>"+
        "<td>"+personas[i].edad+"</td>"+
        "<td>"+personas[i].nombre+"</td>"+"</tr>";
    }

    tabla += "</table>";
    cmpTabla.innerHTML=tabla;
}

encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    
    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad>personaMayor.edad)personaMayor=elementoPersona;
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("lblMayor",`Nombre: ${mayor.nombre} \n Edad: ${mayor.edad}`);
}

encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    
    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad<personaMenor.edad)personaMenor=elementoPersona;
    }
    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("lblMenor",`Nombre: ${menor.nombre} \n Edad: ${menor.edad}`);
}