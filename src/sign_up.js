function sign_up() {
 
    var username = document.getElementById("username_signup");
    var pass = document.getElementById("password_signup");
 
    if (username.value == "") {
 
        alert("Please enter user name!");
 
    } else if (pass.value  == "") {
 
        alert("Please enter password!");
 
    } else{
 
        window.location.href="login.html";
 
    } 
}