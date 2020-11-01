
function cambiarPagina(){
    if(window.confirm("¿Confirma que quiere ir a otra página?")) {
        deleteItem(itemId);
    }

    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }