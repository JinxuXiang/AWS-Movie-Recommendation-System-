// Find User Name from S3
var [now_user_name, now_user_pwd] = extra_user()
console.log("user "+now_user_name)

var apigClient = apigClientFactory.newClient();
var params = {userName: now_user_name}
apigClient.useridGet(params, {}, {}).then(function(result){

    console.log("User ID")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length

    user_id = result["data"]["result_0"]["userId"]
    document.getElementById("UserNameContent").innerHTML = now_user_name
    document.getElementById("UserIDContent").innerHTML = padding(user_id, 5)

    var params = {userId:  user_id};
    console.log(params)

    apigClient.watchinghistoryGet(params, {}, {}).then(function(result){

        console.log("Watching History")
        console.log(result);
        num_of_result = Object.keys(result["data"]).length
        
        for (i = 0; i < Math.min(5, num_of_result); i++){
            result_str = "result_" + i.toString()
            now_data = result["data"][result_str]
            var div = document.createElement('div');
            div.innerHTML = now_data["movieName"]
            div.onclick = click_movie(now_data["movieId"], "user")
            document.getElementById("watch_history").appendChild(div);
        }

        
        
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });

    apigClient.watchinglistGet(params, {}, {}).then(function(result){

        console.log("Watching List")
        console.log(result);
        num_of_result = Object.keys(result["data"]).length
        for (i = 0; i < Math.min(5, num_of_result); i++){
            result_str = "result_" + i.toString()
            now_data = result["data"][result_str]
            var div = document.createElement('div');
            div.innerHTML = now_data["movieName"]
            div.onclick = click_movie(now_data["movieId"], "user")
            document.getElementById("watch_list").appendChild(div);
        }
        
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });

    apigClient.friendGet(params, {}, {}).then(function(result){

        console.log("Friend")
        console.log(result);
        num_of_result = Object.keys(result["data"]).length
        for (i = 0; i < num_of_result; i++){
            result_str = "result_" + i.toString()
            now_data = result["data"][result_str]
            var div = document.createElement('div');
            div.innerHTML = now_data["userName"]
            div.onclick = click_friend(now_data["userId"], "user")
            document.getElementById("friends").appendChild(div);
        }

        
        
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });

    
}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});

        
        
    

