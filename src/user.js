// Extract User Name and User PassWord
if (location.search != ''){
    console.log(location.search)
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    temp = parameters[1].split("=");
    p = unescape(temp[1]);

    console.log(l)
    console.log(p)
}

// Find User Name from S3
var user_S3 = {Bucket: storage_bucket, Key: 'user_pro.csv'}
new AWS.S3().getObject(params, function(err, data)
{
    if (!err)
        var s3file = data.Body.toString()
        s3file = JSON.parse(s3file)
        console.log(s3file)
        
});
