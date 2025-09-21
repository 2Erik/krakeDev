calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;

    nota1=recuperarFlotante("txtNota1");
    nota2=recuperarFlotante("txtNota2");
    nota3=recuperarFlotante("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    cambiarTexto("lblPromedio",promedio);
    if(promedio<5 && promedio>0){
        cambiarTexto("lblNota","REPROBADO");
        cambiarImagen("imgNota","mal.gif");
    }else if(promedio>=5 && promedio <=8){
        cambiarTexto("lblNota","BUEN TRABAJO");
        cambiarImagen("imgNota","ok.gif");
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblNota","EXELENTE");
        cambiarImagen("imgNota","exelente.gif");
    }else{
        cambiarTexto("lblNota","DATOS INCORRECTOS");
        cambiarImagen("imgNota","error.gif");
    }
}