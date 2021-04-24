var [now_user_name, now_user_pwd, now_friend_id, last_page] = extra_movie()
console.log("user "+now_user_name)

function click_back(){
    return function goback(){
        window.location.href="../homepage.html?user=" + now_user_name + "&pass=" + now_user_pwd 
        
    }
}

document.getElementById("back").onclick = click_back()

var apigClient = apigClientFactory.newClient();
var params = {userName: now_user_name}
var user_id = ""

apigClient.useridGet(params, {}, {}).then(function(result){

    console.log("User ID")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length

    user_id = result["data"]["result_0"]["userId"]


}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});


var params = {userId: now_friend_id}
console.log(params)

apigClient.friendinfoGet(params, {}, {}).then(function(result){

    console.log("Friend")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length
    friend_name = result["data"]["result_0"]["userName"]
    friend_id = result["data"]["result_0"]["userId"]

    document.getElementById("UserNameContent").innerHTML = friend_name
    document.getElementById("UserIDContent").innerHTML = padding(friend_id, 5)
    for (i = 0; i < Math.min(5, num_of_result); i++){
        result_str = "result_" + i.toString()
        now_data = result["data"][result_str]
        var div = document.createElement('div');
        div.innerHTML = now_data["movieName"]
        div.onclick = click_movie(now_data["movieId"], "friend")
        document.getElementById("watch_history").appendChild(div);
    }
    


}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});