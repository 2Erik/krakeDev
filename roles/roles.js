let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0594105087",nombre:"Armando",apellido:"Paredes",sueldo:600.0}
];

let roles=[];

let esNuevo=false;

ejecutarBusqueda = function(){
    let cedula=recuperarTexto("txtBusquedaCedula");

    let empleadoEncontrado=buscarEmpleado(cedula);

    if(empleadoEncontrado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre",empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido",empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleadoEncontrado.sueldo);

        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
}

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
            esNuevo = false;
        }else{
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
            let empleadoAModificar=buscarEmpleado(empleado.cedula);
            
            empleadoAModificar.nombre=empleado.nombre;
            empleadoAModificar.apellido=empleado.apellido;
            empleadoAModificar.sueldo=empleado.sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");

            mostrarEmpleados();
            limpiarErrores();
            limpiarCajasDeTexto();
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
    deshabilitarComponente("btnGuardarRol");
}

mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarRol();
    mostrarTotales();
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
    deshabilitarCamposEmpleado();
    esNuevo = false;
}

limpiarErrores=function(){
    mostrarTexto("lblErrorCedula","");
    mostrarTexto("lblErrorNombre","");
    mostrarTexto("lblErrorApellido","");
    mostrarTexto("lblErrorSueldo","");
}

// Funciones para el campo ROL

buscarPorRol = function(){
    let buscarCedulaRol = recuperarTexto("txtBusquedaCedulaRol");

    let empleadoRol=buscarEmpleado(buscarCedulaRol);

    if(empleadoRol==null){
        alert("EL EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula",empleadoRol.cedula);
        mostrarTexto("infoNombre",`${empleadoRol.nombre} ${empleadoRol.apellido}`);
        mostrarTexto("infoSueldo",empleadoRol.sueldo);
    }
}

calcularAporteEmpleado=function(sueldoEmpleado){
    let porcentajeAporte = 0.0945;
    return porcentajeAporte * sueldoEmpleado;
}

calcularValorAPagar=function(sueldoEmpleado,aporteIEES,descuento){
    return sueldoEmpleado-aporteIEES-descuento;
}

calcularRol=function(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let aporteempleado;
    let valorAPagar;

    if(descuento<0 || descuento>sueldo){
        mostrarTexto("lblErrorDescuentos",`El descuento debe estar en el rando de 0 y ${sueldo}`);
    }else{
        aporteempleado = calcularAporteEmpleado(sueldo);
        valorAPagar = calcularValorAPagar(sueldo,aporteempleado,descuento);
        mostrarTexto("infoIESS",aporteempleado);
        mostrarTexto("infoPago",valorAPagar);
        habilitarComponente("btnGuardarRol");
    }
}

buscarRol=function(cedula){
    for(let i; i<roles.length;i++){
        if(roles[i].cedula === cedula){
            return roles[1];
        }
    }
    return null;
}

agregarRol = function(rol){
    for(let i=0;i<roles.length;i++){
        if(roles[i].cedula === rol.cedula){
            alert(`El rol del empleado ${rol.nombre} con cedula ${rol.cedula} ya existe`);
            return;
        }
    }
    roles.push(rol);
    alert("Rol agregado con exito");
}

calcularAporteEmpleador=function(sueldo){
    let aporteEmpleador = 0.1115;
    return aporteEmpleador * sueldo;
}

guardarRol=function(){
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let aporteEmpleador;
    let aporteEmpleado;
    let valorAPagar;
    let rol={};

    aporteEmpleador=calcularAporteEmpleador(sueldo);
    aporteEmpleado=calcularAporteEmpleado(sueldo);
    valorAPagar=calcularValorAPagar(sueldo,aporteEmpleado,descuento);
    
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.valorAPagar=valorAPagar;
    rol.aporteEmpleado=aporteEmpleado;
    rol.aporteEmpleador=aporteEmpleador;

    agregarRol(rol);

    deshabilitarComponente("btnGuardarRol");
}

mostrarRol=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let componenteRol;
    let tabla="<table>";

    for(let i=0;i<roles.length;i++){
        componenteRol=roles[i];
        tabla+="<tr><td>CEDULA</td><td>"+componenteRol.cedula+"</td></tr>"
        +"<tr><td>NOMBRE</td><td>"+componenteRol.nombre+"</td></tr>"
        +"<tr><td>SUELDO</td><td>"+componenteRol.valorAPagar+"</td></tr>"
        +"<tr><td>APORTE EMPLEADO</td><td>"+componenteRol.aporteEmpleado+"</td></tr>"
        +"<tr><td>APORTE EMPLEADOR</td><td>"+componenteRol.aporteEmpleador+"</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    let totalNominal=0;

    for(let i=0;i,i<roles.length;i++){
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }

    totalNominal = totalAPagar + totalEmpleado +totalEmpleador;

    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",totalEmpleado);
    mostrarTexto("infoTotalNominal",totalNominal);
}