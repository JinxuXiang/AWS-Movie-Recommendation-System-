var [now_user_name, now_user_pwd, now_movie_id, last_page] = extra_movie()
console.log("user "+now_user_name)

function click_back(){
    return function goback(){
        window.location.href="../homepage.html?user=" + now_user_name + "&pass=" + now_user_pwd 
        
    }
}

document.getElementById("back").onclick = click_back()

var apigClient = apigClientFactory.newClient();
var params = {userName: now_user_name}
console.log(params)
var user_id = ""

apigClient.useridGet(params, {}, {}).then(function(result){

    console.log("User ID")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length

    user_id = result["data"]["result_0"]["userId"]

    var params = {userId: user_id, movieId: now_movie_id};
    console.log(params)

    apigClient.ratingGet(params, {}, {}).then(function(result){

        console.log("Rating")
        console.log(result);
        num_of_result = Object.keys(result["data"]).length

        if (num_of_result > 0){
            date = result["data"]["result_0"]["date"]
            rating = result["data"]["result_0"]["rating"]
            document.getElementById("MovieRating").innerHTML = "You gave " + rating + " stars to this movie on " + date
            document.getElementById("textRating").innerHTML = "Re-rate the movie:"
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
    document.getElementById("MovieNameContent").innerHTML = movie_name
    document.getElementById("MovieYearContent").innerHTML = movie_year

    
}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});




var params = {movieId: now_movie_id};
console.log(params)

apigClient.similarmovieGet(params, {}, {}).then(function(result){

    console.log("Similar Movie")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length
    if (num_of_result > 0){
        document.getElementById("similar_movies").innerHTML = ""
    }
    for (i = 0; i < Math.min(10, num_of_result); i++){
        result_str = "result_" + i.toString()
        now_data = result["data"][result_str]
        if (result["data"][result_str]["movieId"] != now_movie_id){
            var div = document.createElement('div');
            div.innerHTML = now_data["movieName"]
            div.onclick = click_rating(now_data["movieId"], "rating")
            document.getElementById("similar_movies").appendChild(div);
        }
        
    }

    
}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});


var params = {movieId: now_movie_id};
console.log(params)

apigClient.tagGet(params, {}, {}).then(function(result){

    console.log("Tags")
    console.log(result);
    num_of_result = Object.keys(result["data"]).length
    if (num_of_result > 0){
        document.getElementById("movie_tags").innerHTML = ""
    }
    for (i = 0; i < Math.min(5, num_of_result); i++){
        result_str = "result_" + i.toString()
        now_data = result["data"][result_str]
        var div = document.createElement('div');
        div.innerHTML = now_data["tag"]
        document.getElementById("movie_tags").appendChild(div);
        
    }
}).catch(function(result){
//This is where you would put an error callback
console.log(result);
});



function click_rating(movieId, last_page){
    return function goto_movie(){
        window.location.href= "movie.html?" + "user=" + now_user_name + "&pass=" + now_user_pwd + "&movieId=" + movieId + "&lastPage=" + last_page
    }
}




function submit_rating(){
    console.log("userId:", user_id)
    params = {userId: user_id, movieId: now_movie_id, rating: document.getElementById("rating").value}
    console.log(params)
    apigClient.ratingPost(params, {}, {}).then(function(result){

        console.log("Rating")
        console.log(result);
        alert("Submitted Successfully!")
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });
}

function submit_tag(){
    console.log("userId:", user_id)
    params = {userId: user_id, movieId: now_movie_id, tag: document.getElementById("tag").value}
    console.log(params)
    apigClient.tagPost(params, {}, {}).then(function(result){

        console.log("Tag")
        console.log(result);
        alert("Submitted Successfully!")
    }).catch(function(result){
    //This is where you would put an error callback
    console.log(result);
    });
}


