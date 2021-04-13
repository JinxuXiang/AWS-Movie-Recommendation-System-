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
    }        
});

