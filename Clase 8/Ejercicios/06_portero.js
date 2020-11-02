// LLAMADA ==> DONDE QUIERO UTILIZAR LA FUNCION

//FIRMA O DECLARACION nombreFuncion(parametro1)

//INSTANCIA O CUERPO O DESARROLLO DE LA FUNCION { lo que va entre las llaves} 

function PresionarBoton(){
    //tomar el valor presionado
    let valor = 1;
    
    let piso = document.getElementById("piso").innerHTML;
    let dpto = document.getElementById("dpto").innerHTML;
    
    //verificar si en el piso puedo ingresar datos
    if (piso.lenght <2){
        //guardo en el piso el valor presionado
        document.getElementById("piso").innerHTML = piso.toString() + valor.toString()
    }else{   
        //sino puedo ingresar en piso, verificar en dpto
        if(dpto.lenght < 1){
         //guardar en el dpto el valor presionado
        document.getElementById("dpto").innerHTML = dpto.toString() + valor.toString()
        }
    }
      

}

function PresionarBoton2(nroBoton){
    document.getElementById("piso").value = 10;
    
}



function ponerEnElPanelDePisoElNumeroQueMeDiste(elNumeroQueMeDiste){
    const resultado = document.getElementById("piso").innerHTML + elNumeroQueMeDiste
    //si el resultado es mas grande que tres digitos si no me sigo quedanto en el piso
    if(resultado.length <= 2){
        // Los pisos se identifican con los valores del 00 al 48
        if(parseFloat(resultado) <= 48){
            document.getElementById("piso").innerHTML = resultado;
        }else{
           
            document.getElementById("panelDeTexto").innerHTML = "el piso " + resultado + " no existe";
        }
    }else{
         //Los departamentos van del 1 al 6
         if(elNumeroQueMeDiste <= 6){
            document.getElementById("dpto").innerHTML = elNumeroQueMeDiste; 
         }else{
            document.getElementById("panelDeTexto").innerHTML = "el depto " + elNumeroQueMeDiste + " no existe";
         }
        
    }
}

function llamar(){

    //si 
    //el panel de dpto no tiene nada
    document.getElementById("dpto").innerHTML !== "" 

    //se cumple lo llamo si no aviso que falta completar datos


    document.getElementById("panelDeTexto").innerHTML = "llamando";
}

function borrar(){
    document.getElementById("piso").innerHTML = ""
    document.getElementById("dpto").innerHTML = ""
    document.getElementById("panelDeTexto").innerHTML = ""
    

}

// boton de llamar, delimitar maxima y minima
// boton de borrar
// mostrar en el visor abajo




