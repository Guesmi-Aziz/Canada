function open_dachbord(){
    email = f1.Email.value;
    password = f1.password.value;

    if((email.toUpperCase() != "Servitech@gmail.com") && password != "Servitechcanada")
        {
            alert("check eamail or password");
            return false;
        }
        
        window.open("Admin/html/collapsible-menu/index.html");
}