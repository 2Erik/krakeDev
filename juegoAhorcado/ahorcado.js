//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(letra){
    let mayuscula=letra.charCodeAt(0);
    if(mayuscula>=65 && mayuscula<=90){
        return true;
    }else{
        return false;
    }
}