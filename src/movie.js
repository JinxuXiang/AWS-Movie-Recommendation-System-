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


    for (i = 0; i < Math.min(5, num_of_result); i++){
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



