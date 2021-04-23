var [now_user_name, now_user_pwd, now_movie_id, last_page] = extra_movie()
console.log("user "+now_user_name)
function click_back(last_page){
    return function goback(){
        if (last_page == "user"){
            window.location.href="user.html?user=" + now_user_name + "&pass=" + now_user_pwd 
        }
        else if (last_page == "recommendation"){
            window.location.href="recommendation.html?user=" + now_user_name + "&pass=" + now_user_pwd 
        }
    }
}


document.getElementById("back").onclick = click_back(last_page)

var apigClient = apigClientFactory.newClient();
var params = {userName: now_user_name}
var user_id = ""

apigClient.useridGet(params, {}, {}).then(function(result){

    console.log("User ID")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length

    user_id = result["data"]["result_0"]["userId"]

    params = {userId: user_id, movieId: now_movie_id};
    console.log(params)

    apigClient.checkwatchinglistGet(params, {}, {}).then(function(result){

        console.log("Check Watching List")
        console.log(result);
        num_of_result = Object.keys(result["data"]).length

        if (num_of_result > 0){
            document.getElementById("watching_list").innerHTML= "Delete Movie From Watching List"
            document.getElementById("watching_list").onclick = delete_watchinglist
        }
        
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });


}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});



var params = {movieId: now_movie_id};
console.log(params)

apigClient.movieGet(params, {}, {}).then(function(result){

    console.log("Movie")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length

    movie_name = result["data"]["result_0"]["movieName"]
    movie_year = result["data"]["result_0"]["year"]
    document.getElementById("MovieNameContent").innerHTML= movie_name
    document.getElementById("MovieYearContent").innerHTML= movie_year


    for (i = 0; i < Math.min(10, num_of_result); i++){
        result_str = "result_" + i.toString()
        now_data = result["data"][result_str]
        var div = document.createElement('div');
        div.innerHTML = now_data["genres"]
        document.getElementById("movie_genres").appendChild(div);
    }
    
}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});





function insert_watchinglist(){
    
    var params = {userId: user_id, movieId: now_movie_id}
    apigClient.watchinglistPost(params, {}, {}).then(function(result){

        console.log("Post Watching List")
        console.log(result);
        document.getElementById("watching_list").innerHTML= "Delete Movie From Watching List"
        document.getElementById("watching_list").onclick = delete_watchinglist
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });
    
}

function delete_watchinglist(){
    
    var params = {userId: user_id, movieId: now_movie_id}
    apigClient.watchinglistDelete(params, {}, {}).then(function(result){

        console.log("Delete Watching List")
        console.log(result);
        document.getElementById("watching_list").innerHTML= "Add Movie to Watching List"
        document.getElementById("watching_list").onclick = insert_watchinglist
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });
    
}


function insert_watchinghistory(){
    
    var params = {userId: user_id, movieId: now_movie_id}
    apigClient.watchinghistoryPost(params, {}, {}).then(function(result){

        console.log("Post Watching History")
        console.log(result);
        
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });
    click_rating(now_movie_id, "movie")()
}



