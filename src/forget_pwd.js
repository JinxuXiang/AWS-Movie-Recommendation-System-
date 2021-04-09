function change_pwd() {
 
    var username = document.getElementById("username_pwd");
    var pass = document.getElementById("password_pwd");
    var confirm = document.getElementById("confirm_pwd");
 
    if (username.value == "") {
 
        alert("Please enter user name!");
 
    } else if (pass.value  == "") {
 
        alert("Please enter password!");
 
    }else if (confirm.value  == "") {
 
        alert("Please enter confirm!");
 
    } else if(pass.value != confirm.value){
        
        alert("Passwords do not match!")
       
    } else {
 
        window.location.href="login.html";
 
    }
}
