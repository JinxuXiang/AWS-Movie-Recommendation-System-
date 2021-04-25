import json
import sys
import pymysql

rds_host  = "projectdb.cxd4nclkb1ks.us-east-1.rds.amazonaws.com"
name = "admin"
password = "xjxproject"
db_name = "project_data"



def lambda_handler(event, context):
    # TODO implement
    
    print("Start Connection")

    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
    
    print("SUCCESS: Connection to RDS MySQL instance succeeded")
    print(event)
    key, = event["queryStringParameters"]
    value = event["queryStringParameters"][key]
    print("key:", key)
    print("value:", value)
    sql = "SELECT w.userId, w.movieId, m.movieName, w.minute, w.second, w.status FROM watching_list w LEFT JOIN movies m ON w.movieId = m.movieId WHERE {0} = {1} ".format(key, value)
    print(sql)
    with conn.cursor() as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    
    results = {}
    for i in range(len(rows)):
        row = rows[i]
        result = {}
        result["userId"] = row[0]
        result["movieId"] = row[1]
        result["movieName"] = row[2]
        result["minute"] = row[3]
        result["second"] = row[4]
        result["status"] = row[5]
        results["result_"+str(i)] = result
        
    response = dict()
    response["headers"] = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
    response.update({
            'statusCode': 200,
            'body': json.dumps(results)
        })
    print(response)

    return response
