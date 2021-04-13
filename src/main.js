// keep user login
function html_id(str){
    str += location.search
    return str
}

// AWS SDK
AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName }
});

// Variable
storage_bucket = "yz3691projectstorage"