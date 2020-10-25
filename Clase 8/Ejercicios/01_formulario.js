

function cambiarOpcion(){
  let opcionElegida = document.getElementById('ocupacion').value;
    if( opcionElegida == "Estudiante"){
        document.getElementById("selector").innerHTML= "<div>" +   
        ' <input type="radio" id="secundario" name="educacion" value="secundario">' + 
        '<label for="secundario">Secundario</label><br>' + 
        '<input type="radio" id="terciario" name="terciario" value="terciario">' + 
        '<label for="terciario">Terciario</label><br>' + 
        '<input type="radio" id="other" name="other" value="other">' + 
        '<label for="other">Universitario</label>'
      +"</div>"
    }else if( opcionElegida == "Trabajador"){
        document.getElementById("selector").innerHTML= "<div>"+ 
        ' <input type="radio" id="monot" name="monot" value="monot">'+
        '<label for="monot">monotributista</label><br>'+
        '<input type="radio" id="reldep" name="reldep" value="reldep">'+
        '<label for="reldep">relación de dependencia</label><br>'+
        '<input type="radio" id="other" name="gender" value="other">'+
        '<label for="other">informal</label>'
      +"</div>"
    }else if( opcionElegida == "..."){ 
        document.getElementById("selector").innerHTML= "";
    } 
}

function enviarFormulario(){
    alert('La información ha sido enviada');
}

