let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0594105087",nombre:"Armando",apellido:"Paredes",sueldo:600.0}
];

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let componentesEmpleado;
    let tabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+"</tr>";

    for(let i=0;i<empleados.length;i++){
        componentesEmpleado=empleados[i];
        tabla+="<tr><td>"+componentesEmpleado.cedula+"</td>"
        +"<td>"+componentesEmpleado.nombre+"</td>"
        +"<td>"+componentesEmpleado.apellido+"</td>"
        +"<td>"+componentesEmpleado.sueldo+"</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}