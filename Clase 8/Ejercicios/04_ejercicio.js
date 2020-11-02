function cambiarModo() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function setCookie(modo){
     var d = modo()
 }
 document.cookie="modo-Dark; expires= 20 Dec 2020";