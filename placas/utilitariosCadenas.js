esMayuscula=function(caracter,indice){
    if(caracter.charCodeAt(indice)>=65 && caracter.charCodeAt(indice)<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter,indice){
    if(caracter.charCodeAt(indice)>=48 && caracter.charCodeAt(indice)<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter,indice){
    if(caracter.charCodeAt(indice)==45){
        return true;
    }else{
        return false
    }
}