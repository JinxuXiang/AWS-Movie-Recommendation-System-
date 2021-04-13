// Find User Name from S3
var user_csv = {Bucket: storage_bucket, Key: 'user_pro.csv'};
var recommended_csv = {Bucket: storage_bucket, Key: 'recommended_movies.csv'};
var movie_csv = {Bucket: storage_bucket, Key: 'movies_pro.csv'};
var csv_data;
var [now_user_name, now_user_pwd] = extra_user();
var now_user_id;
console.log("user "+now_user_name)


var get_user = new AWS.S3().getObject(user_csv, function(err, data)
{
    if (!err){
        csv_data = parseData(data.Body.toString('utf-8'))

        for (var i = 0; i < csv_data.length; i++) {
            if (csv_data[i][2] == now_user_name){
                now_user_id = csv_data[i][1]
                break
            }
        }
    }        
})
var promise_get_user = get_user.promise();

var recommended_list = []
promise_get_user.then( () => {
    console.log('User_ID: ' + now_user_id)
    var get_recommended = new AWS.S3().getObject(recommended_csv, function(err, data)
    {
        if (!err){
            csv_data = parseData(data.Body.toString('utf-8'))
            for (var i = 0; i < csv_data.length; i++) {
                if (csv_data[i][1] == now_user_id){
                    recommended_list.push(csv_data[i][2])
                }
            }
            
            
        }  
    })
    var promise_recommended = get_recommended.promise();

    promise_recommended.then(() => {
        console.log("Recommendation List: " + recommended_list)
        var get_movies = new AWS.S3().getObject(movie_csv, function(err, data)
        {
            if (!err){
                csv_data = parseData(data.Body.toString('utf-8'))
                for (var i = 0; i < csv_data.length; i++) {
                    if (recommended_list.includes(csv_data[i][1])){
                        var div = document.createElement('div');
                        div.innerHTML = csv_data[i][2].substring(1)
                        document.getElementById("recommendation").appendChild(div);
                    }
                }
                
            }  
        })
    })
    
})


