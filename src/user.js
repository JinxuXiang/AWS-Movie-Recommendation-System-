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
            let num_of_result = Object.keys(result["data"]).length
            var num_pages = Math.min(num_of_result/5,20)
            console.log(num_pages)
            for (i = 0; i < Math.min(5, num_of_result); i++){
                result_str = "result_" + i.toString()
                now_data = result["data"][result_str]
                var div = document.createElement('div');
                div.innerHTML = now_data["movieName"]
                div.onclick = click_movie(now_data["movieId"], "user")
                document.getElementById("watch_history").appendChild(div);
            }
            if(num_pages>1){
                for(i = 0 ; i<num_pages;i++){
                    var li = document.createElement("li");
                    li.textContent = ""
                    let a = document.createElement("a")
                    a.href = "#"
                    if(i >= num_pages - 1){
                    a.textContent = (i+1).toString();
                    }
                    else{
                    a.textContent = (i+1).toString() + "_";
                    }
                    console.log(a.textContent)
                    li.appendChild(a)
                    //li.setAttribute("href","#")
                    document.getElementById("wh_pagin").appendChild(li);
                  }
                let lis = document.getElementById('wh_pagin').getElementsByTagName('li');
                console.log(lis.length)
                for(let j=0;j<lis.length;j++){
                    p = lis[j]
                    p.onclick = function () {
                        document.getElementById("watch_history").innerHTML = ""
                        //console.log(num_of_result)
                        //console.log(5*j)
                        //console.log(Math.min(5*j+5,num_of_result))
                        for(let i=5*j;i<Math.min(5*j+5,num_of_result);i++){
                            result_str = "result_" + i.toString()
                            now_data = result["data"][result_str]
                            var div = document.createElement('div');
                            div.innerHTML = now_data["movieName"]
                            div.onclick = click_movie(now_data["movieId"], "user")
                            document.getElementById("watch_history").appendChild(div);
                        }
                    };
                }
            }
            
        }).catch(function(result){
        //This is where you would put an error callback
        console.log(result);
        });

        apigClient.watchinglistGet(params, {}, {}).then(function(result){

            console.log("Watching List")
            console.log(result);
            let num_of_result = Object.keys(result["data"]).length
            var num_pages = Math.min(num_of_result/5,20)
            for (i = 0; i < Math.min(5, num_of_result); i++){
                result_str = "result_" + i.toString()
                now_data = result["data"][result_str]
                var div = document.createElement('div');
                div.innerHTML = now_data["movieName"]
                div.onclick = click_movie(now_data["movieId"], "user")
                document.getElementById("watch_list").appendChild(div);
            }
            if(num_pages>1){
            for(i = 0 ; i<num_pages;i++){
                var li = document.createElement("li");
                li.textContent = ""
                let a = document.createElement("a")
                a.href = "#"
                if(i >= num_pages - 1){
                a.textContent = (i+1).toString();
                }
                else{
                a.textContent = (i+1).toString() + "_";
                }
                console.log(a.textContent)
                li.appendChild(a)
                //li.setAttribute("href","#")
                document.getElementById("wl_pagin").appendChild(li);
              }
            let lis = document.getElementById('wl_pagin').getElementsByTagName('li');
            console.log(lis.length)
            for(let j=0;j<lis.length;j++){
                p = lis[j]
                p.onclick = function () {
                    document.getElementById("watch_list").innerHTML = ""
                    //console.log(num_of_result)
                    //console.log(5*j)
                    //console.log(Math.min(5*j+5,num_of_result))
                    for(let i=5*j;i<Math.min(5*j+5,num_of_result);i++){
                        result_str = "result_" + i.toString()
                        now_data = result["data"][result_str]
                        var div = document.createElement('div');
                        div.innerHTML = now_data["movieName"]
                        div.onclick = click_movie(now_data["movieId"], "user")
                        document.getElementById("watch_list").appendChild(div);
                    }
                };
            }
        }
        }).catch(function(result){
        //This is where you would put an error callback
        console.log(result);
        });
    
        apigClient.friendGet(params, {}, {}).then(function(result){

            console.log("Friend")
            console.log(result);
            let num_of_result = Object.keys(result["data"]).length
            var num_pages = Math.min(num_of_result/5,20)
            for (i = 0; i < Math.min(5, num_of_result); i++){
                result_str = "result_" + i.toString()
                now_data = result["data"][result_str]
                var div = document.createElement('div');
                div.innerHTML = now_data["userName"]
                div.onclick = click_friend(now_data["userId"], "user")
                document.getElementById("friends").appendChild(div);
            }
            if(num_pages>1){
                for(i = 0 ; i<num_pages;i++){
                    var li = document.createElement("li");
                    li.textContent = ""
                    let a = document.createElement("a")
                    a.href = "#"
                    if(i >= num_pages - 1){
                    a.textContent = (i+1).toString();
                    }
                    else{
                    a.textContent = (i+1).toString() + "_";
                    }
                    console.log(a.textContent)
                    li.appendChild(a)
                    //li.setAttribute("href","#")
                    document.getElementById("fr_pagin").appendChild(li);
                  }
                let lis = document.getElementById('fr_pagin').getElementsByTagName('li');
                console.log(lis.length)
                for(let j=0;j<lis.length;j++){
                    p = lis[j]
                    p.onclick = function () {
                        document.getElementById("friends").innerHTML = ""
                        //console.log(num_of_result)
                        //console.log(5*j)
                        //console.log(Math.min(5*j+5,num_of_result))
                        for(let i=5*j;i<Math.min(5*j+5,num_of_result);i++){
                            result_str = "result_" + i.toString()
                            now_data = result["data"][result_str]
                            var div = document.createElement('div');
                            div.innerHTML = now_data["userName"]
                            div.onclick = click_movie(now_data["userId"], "user")
                            document.getElementById("friends").appendChild(div);
                        }
                    };
                }
            }
        }).catch(function(result){
        //This is where you would put an error callback
        console.log(result);
        });
    }        
});


