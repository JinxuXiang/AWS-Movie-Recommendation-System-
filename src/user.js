// Find User Name from S3
var user_csv = {Bucket: storage_bucket, Key: 'user_pro.csv'}
var csv_data;
var [now_user_name, now_user_pwd] = extra_user()
console.log("user "+now_user_name)





new AWS.S3().getObject(user_csv, function(err, data)
{
    if (!err){
        csv_data = parseData(data.Body.toString('utf-8'))

        for (var i = 0; i < csv_data.length; i++) {
            if (csv_data[i][2] == now_user_name){
                console.log(csv_data[i][2])
                document.getElementById("UserNameContent").innerHTML= csv_data[i][2]
                document.getElementById("UserIDContent").innerHTML= padding(csv_data[i][1], 5)
                break
            }
        }
        
        var apigClient = apigClientFactory.newClient();
        var params = {userId:  csv_data[i][1]};
        console.log(params)

        apigClient.watchinghistoryGet(params, {}, {}).then(function(result){

            console.log("Watching History")
            console.log(result);
            num_of_result = Object.keys(result["data"]).length
            for (i = 0; i < Math.min(8, num_of_result); i++){
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
            for (i = 0; i < Math.min(20, num_of_result); i++){
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
                document.getElementById("friends").appendChild(div);
            }
            
        }).catch(function(result){
        //This is where you would put an error callback
        console.log(result);
        });
    }        
});


