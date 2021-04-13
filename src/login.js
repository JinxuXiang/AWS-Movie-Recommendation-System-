

function login() {
    var user_csv = {Bucket: storage_bucket, Key: 'user_pro.csv'};
    var username = document.getElementById("username_login");
    var pass = document.getElementById("password_login");
 
    if (username.value == "") {
 
        alert("Please enter user name!");
 
    } else if (pass.value  == "") {
 
        alert("Please enter password!");
 
    } 
    var get_user = new AWS.S3().getObject(user_csv, function(err, data)
    {
        if (!err){
            csv_data = parseData(data.Body.toString('utf-8'))
            Find_user = false
            
            for (var i = 0; i < csv_data.length; i++) {
                console.log(csv_data[i][2], username)
                console.log(csv_data[i][3], pass)
                if (csv_data[i][2] == username.value && csv_data[i][3] == pass.value){
                    
                    window.location.href="user.html?user="+username.value+"&pass="+pass.value;
                    Find_user = true
                    break
                }
            }
            if (!Find_user){
                alert("Please enter the correct username and password!")
            }
        }        
    })

}
