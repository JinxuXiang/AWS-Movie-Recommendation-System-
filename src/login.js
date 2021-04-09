function login() {
 
    var username = document.getElementById("username_login");
    var pass = document.getElementById("password_login");
 
    if (username.value == "") {
 
        alert("Please enter user name!");
 
    } else if (pass.value  == "") {
 
        alert("Please enter password!");
 
    } else if(username.value == "admin" && pass.value == "123456"){
 
        window.location.href="user.html?user="+username.value+"&pass="+pass.value;
 
    } else {
 
        alert("Please enter the correct username and password!")
 
    }
}
