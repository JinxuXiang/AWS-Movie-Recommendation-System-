
// Variable
var storage_bucket = "yz3691projectstorage"
var IdentityPoolId = "us-east-1:e17babc6-01d7-471d-9939-a50af3727eb7"

// keep user login
function html_id(str){
    str += location.search

    return str
}

// AWS SDK
AWS.config.update({
    region: "us-east-1",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
});

// S3
var S3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: storage_bucket }
});

// Parse CSV Data
function parseData(data){
    let csvData = [];
    let lbreak = data.split("\n");
    lbreak.forEach(res => {
        csvData.push(res.split(","));
    });
    return csvData
}

// Padding ID
function padding(num, length) {
    for(var len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;            
    }
    return num;
}

// Extract User Name and User PassWord
function extra_user(){
    
    if (location.search != ''){
        console.log(location.search)
        var parameters = location.search.substring(1).split("&");

        var temp = parameters[0].split("=");
        var now_user_name = unescape(temp[1]);
        temp = parameters[1].split("=");
        var now_user_pwd = unescape(temp[1]);

        console.log("Username:" + now_user_name)
        console.log("Password:" + now_user_pwd)
        return [now_user_name, now_user_pwd]
    }
    else{
        return [null, null]
    }
}

function extra_movie(){
    
    if (location.search != ''){
        console.log(location.search)
        var parameters = location.search.substring(1).split("&");

        var temp = parameters[0].split("=");
        var now_user_name = unescape(temp[1]);
        temp = parameters[1].split("=");
        var now_user_pwd = unescape(temp[1]);
        temp = parameters[2].split("=");
        var now_movie_id = unescape(temp[1]);
        temp = parameters[3].split("=");
        var last_page = unescape(temp[1]);

        console.log("Username:" + now_user_name)
        console.log("Password:" + now_user_pwd)
        console.log("Movie ID:" + now_movie_id)
        console.log("Last Page:" + last_page)
        console.log("length:" + parameters.length)
        if (parameters.length > 4){
            temp = parameters[4].split("=");
            var now_movie_id2 = unescape(temp[1]);
            temp = parameters[5].split("=");
            var last_page2 = unescape(temp[1]);
            return [now_user_name, now_user_pwd, now_movie_id, last_page, now_movie_id2, last_page2]
        }




        return [now_user_name, now_user_pwd, now_movie_id, last_page]
    }
    else{
        return [null, null, null, null]
    }
}

// Go to movie.html when click a movie

function click_movie(movieId, last_page){
    return function goto_movie(){
        window.location.href=html_id("movie.html") +  "&movieId=" + movieId.toString() + "&lastPage=" + last_page
    }
}

function click_rating(movieId, last_page){
    return function goto_movie(){
        window.location.href=html_id("rating.html") +  "&movieId=" + movieId.toString() + "&lastPage=" + last_page
    }
}

function click_friend(friendId, last_page){
    return function goto_movie(){
        window.location.href=html_id("friend.html") +  "&friendId=" + friendId.toString() + "&lastPage=" + last_page
    }
}

