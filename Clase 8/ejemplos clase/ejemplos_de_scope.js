var a = 50;
function scopeVar() {
    var b = 10;
    if (1==1){
        //como el scope de la variable b es toda la funcion, si la vuelvo a definir
        //dentro el If, sigue siendo la misma variable
        var b = 20;
        console.log('Variable  dentro del if ${b}'); //b==20
    }
    // b==20 porque su scope es la funcion
    console.log('Variable 'b' + dentro del if ${b});
    // la variable a es visible por su scope es global
    console.log('Variable 'a' + es global ==> ${a}');
}

var a = 50;
let x = 'letX'
function scopeLet() {
    console.log(x);
    let c = 50;
    if (true) {
        //con let, el scope de la variable es de bloque (en este caso solo el IF)
        //por eso, si la volvemos a declarar son variables distintas
        let c = 60; //variable diferente
        console.log('Variable 'c' dentro del if ${c}'); c==60
    }
    // c==50 porque su scope es la funcion
    console.log('Variable 'c' luego del if ${c}');
    // la variablke a es visible porque su scope es global
    console.log('Variable 'a' es global ==> ${a}');
}

scopeVar();
scopeLet();
console.log(a); // la variable a es visible por su scope es global
