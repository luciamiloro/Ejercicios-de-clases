function SetCookie(){
    document.cookie = "usuario=Juan Perez";
}
function LeerCookie(){
    window.alert(
        document.cookie
    );
}
SetCookie();
LeerCookie();

//o puedo setearlo asi:
function SetCookie(cname,cvalue, exdays){
    let d = new Date();
    d.setTime(d.getTime() + exdays*24*60*60*1000);
    let expires = "expires="+d.toLocaleDateString();

    document.cookie = cname+"="+cvalue+";"+expires;
}

SetCookie ("PersonaRegistrada", "Maximiliano",1);