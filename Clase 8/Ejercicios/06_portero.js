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

    if(resultado.length > 2 ){
        document.getElementById("dpto").innerHTML = elNumeroQueMeDiste;
    }else{
        document.getElementById("piso").innerHTML = resultado;

    }

   // Los pisos se identifican con los valores del 00 al 48

   
   //Los departamentos van del 1 al 6
}

function llamar(){
    // si la pantalla de piso y dpto estan completas llamo al piso si no estan completas alunas de las dos pantallas tiro error
    

}

function llamar(){
    // borro todo lo que estan en las pantallas

}

// boton de llamar, delimitar maxima y minima
// boton de borrar
// mostrar en el visor abajo




