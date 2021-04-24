function sign_up() {
 
    var username = document.getElementById("username_signup");
    var pass = document.getElementById("password_signup");
 
    if (username.value == "") {
 
        alert("Please enter user name!");
 
    } else if (pass.value  == "") {
 
        alert("Please enter password!");
 
    } else{
 
        var apigClient = apigClientFactory.newClient();
        var params = {userName: username.value, userPass: pass.value};

        apigClient.signinGet(params, {}, {}).then(function(result){

            console.log("Check")
            console.log(result);
            num_of_result = Object.keys(result["data"]).length
            
            if (num_of_result > 0){
                alert("The user already exists, please change your Username!")
            }
            else{
                apigClient.signupPost(params, {}, {}).then(function(result){

                    console.log("SignUp")
                    console.log(result);
                    num_of_result = Object.keys(result["data"]).length
                    
                    window.location.href="login.html";
                    
                }).catch(function(result){
                //This is where you would put an error callback
                console.log(result);
                });
            }
            
        }).catch(function(result){
        //This is where you would put an error callback
        console.log(result);
        });
 
    } 
}