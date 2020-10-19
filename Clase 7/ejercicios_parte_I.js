
function multiplicar () { 
    let input1 = document.getElementById('valor1');
    let input2 = document.getElementById('valor2');
    let resultadoDeInput1 = input1.value;
    let resultadoDeInput2 = input2.value;
    
   let resultado = resultadoDeInput1*resultadoDeInput2;

   let elSpanDelDocumento = document.getElementById('visorResultado');
   elSpanDelDocumento.innerHTML =  "<p>"+  resultado +"</p>";


 }

function sumar (){
    let input1 = parseInt(  document.getElementById('valor1').value );
    let input2 = parseInt(  document.getElementById('valor2').value );

    let resultado = input1+input2;

    document.getElementById('visorResultado').innerHTML="<p>"+resultado+"</p>";

}

 
function restar (){
    let input1 = parseInt (document.getElementById('valor1').value);
    let input2 = parseInt (document.getElementById('valor2').value);

    let resultado = input1 - input2;

    document.getElementById('visorResultado').innerHTML="<p>"+resultado+"</p>";
    
}

function dividir (){
    let input1 = parseInt (document.getElementById('valor1').value);
    let input2 = parseInt (document.getElementById('valor2').value);

    let resultado = input1 / input2;

    document.getElementById('visorResultado').innerHTML="<p>"+resultado+"</p>";
}

function mayorQue (){
    let input1 = parseInt (document.getElementById('valor1').value);
    let input2 = parseInt (document.getElementById('valor2').value);

    if (input1 == input2){
        document.getElementById('visorResultado').innerHTML="<h1> son iguales </h1>"
    }else if(input1 > input2){
        document.getElementById('visorResultado').innerHTML="<h1> El nro " +input1+ " es mas grande </h1>"
    }else{
        document.getElementById('visorResultado').innerHTML="<h1>El nro " +input2+ " es mas grande</h1>"
    }
}


function concatenar (){
    let texto1 = document.getElementById('texto1').value;
    let texto2 = document.getElementById('texto2').value;

    let resultado = texto1 +" "+ texto2;

    document.getElementById('concatenacion').innerHTML="<h1>"+ resultado +"</h1>"

}



function calcularDescuento(monto, medioPago){
   
    let nuevoMonto = monto;

    if(monto <200){
        return monto;
    }else{
        if(monto>=200 && monto<400)
        //aplico descuentos
        
        switch(medioPago){
            case 'E':
                nuevoMonto = monto * 0.7;
                break;
            case 'D':
                nuevoMonto = monto * 0.8;
                break;
            case 'C':
                nuevoMonto = monto * 0.9;
                break;
            default:
                console.log("Error");

        }else{
        nuevoMonto = monto *0.6;
        }
        return nuevoMonto;
 }

}

function visorDescuento(){ 
    let resultado = calcularDescuento(document.getElementById('monto').value ,document.getElementById('medioPago').value )
    document.getElementById('visorDescuento').innerHTML = "<p>"+ resultado +"</p>";
}