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
