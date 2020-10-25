function DibujarArbol(altura){
    console.log(altura)

    let arbol = "";

    for(let i=0; i<altura; i++){
        arbol += "<p>"
        for(let j=0; j<i; j++){
            arbol +="*";
        }
        arbol += "</p>";

     }

     //i=filas j=hojas --> por lo general se usa i para el primer for y j para el anidado

    document.getElementById('arbol').innerHTML = arbol;
}

function MostrarNombreDia(numeroDia){
    let nombreDia = "";
    try{ 

    numeroDia = Number(numeroDia);
    
    if (isNaN(numeroDia)){
        throw "El valor ingresado no es un numero"; 
    }
    switch(numeroDia){
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miercoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
        case 7:
            nombreDia = "Fin de semana";
            break;
        default:
            nombreDia = "Error, no es un nombre valido";
            break;   
        }   
    }catch(err){
        //capturo el error y determino la accion a seguir
        alert(err);
    }

    document.getElementById('visorDia').innerHTML = "<p> El dia es" + nombreDia + "</p>";   
}