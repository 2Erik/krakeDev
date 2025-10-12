let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0594105087",nombre:"Armando",apellido:"Paredes",sueldo:600.0}
];

let esNuevo=false;

guardar=function(){
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let sueldo=recuperarFloat("txtSueldo");
    let controlDeErrores=true;

    if(cedula.length!=10){
        mostrarTexto("lblErrorCedula","La cedulade debe tener diez digitos");
        controlDeErrores=false;
    }else{
        for(let i=0;i<cedula.length;i++){
            if(!esDigito(cedula[i])){
                mostrarTexto("lblErrorCedula","La cedula debe tener solo diguitos");
                controlDeErrores=false;
                break;
            }
        }
    }

    if(nombre.length<3){
        mostrarTexto("lblErrorNombre","El nombre debe tener al menos 3 caracteres");
        controlDeErrores=false;
    }else{
        for(let i=0;i<nombre.length;i++){
            if(!esMayuscula(nombre[i])){
                mostrarTexto("lblErrorNombre","El nombre debe estar en mayusculas");
                controlDeErrores=false;
                break;
            }
        }
    }

    if(apellido.length<3){
        mostrarTexto("lblErrorApellido","El apellido debe tener al menos 3 caracteres");
        controlDeErrores=false;
    }else{
        for(let i=0;i<apellido.length;i++){
            if(!esMayuscula(apellido[i])){
                mostrarTexto("lblErrorApellido","El apellido debe estar en mayusculas");
                controlDeErrores=false;
                break;
            }
        }
    }

    if(isNaN(sueldo)){
        mostrarTexto("lblErrorSueldo","El sueldo debe ser un numero");
        controlDeErrores=false;
    }else{
        if(sueldo<400 || sueldo>5000){
            mostrarTexto("lblErrorSueldo","El sueldo debe estar en el rango de 400 y 5000");
            controlDeErrores=false;
    }
    }

    if(esNuevo==true && controlDeErrores==true){
        let empleado={};
        empleado.cedula=cedula;
        empleado.nombre=nombre;
        empleado.apellido=apellido;
        empleado.sueldo=sueldo;

        let=nuevoEmpleado=agregarEmpleado(empleado);

        if(nuevoEmpleado==true){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
        }else{
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
        }
    }
}

agregarEmpleado=function(empleado){
    let existeEmpleado=buscarEmpleado(empleado.cedula);
    if(existeEmpleado==null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }
}

buscarEmpleado=function(cedula){
    for(let i=0;i<empleados.length;i++){
        if(cedula==empleados[i].cedula){
            return empleados[i];
        }
    }
    return null;
}

ejecutarNuevo=function(){
    habilitarCamposEmpleado();
    limpiarCajasDeTexto();
    limpiarErrores();

    esNuevo=true;
}

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

    deshabilitarCamposEmpleado();

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

deshabilitarCamposEmpleado = function() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarCamposEmpleado = function() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

limpiarCajasDeTexto=function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
}

limpiarErrores=function(){
    mostrarTexto("lblErrorCedula","");
    mostrarTexto("lblErrorNombre","");
    mostrarTexto("lblErrorApellido","");
    mostrarTexto("lblErrorSueldo","");
}