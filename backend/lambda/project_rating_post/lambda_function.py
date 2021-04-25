import json
import sys
import pymysql

from datetime import datetime

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
    key1 = "userId"
    key2 = "movieId"
    key3 = "rating"
    value1 = event["multiValueQueryStringParameters"][key1][0]
    value2 = event["multiValueQueryStringParameters"][key2][0]
    value3 = event["multiValueQueryStringParameters"][key3][0]
    print("key1:", key1, "key2:", key2, "key3:", key3)
    print("value1:", value1, "value2:", value2, "value3", value3)
    now = datetime.now()
    date = now.strftime("%Y-%m-%d")
    time = now.strftime("%H:%M:%S")
    print("date:", date, "time:", time)
    
    sql1 = "DELETE FROM ratings WHERE {0} = {1} and {2} = {3}".format(key1, value1, key2, value2)
    print(sql1)
    sql2 = "INSERT INTO ratings VALUES ({0},{1},{2},'{3}','{4}')".format(value1, value2, value3, date, time)
    print(sql2)
    response = dict()
    response["headers"] = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
    try:
        with conn.cursor() as cur:
            cur.execute(sql1)
            cur.execute(sql2)
        conn.commit()
        response.update({
                'statusCode': 200,
                'body': json.dumps("Update Successfully")
            })
        print(response)
        return response
    except:
        response.update({
                'statusCode': 403,
                'body': json.dumps("Update Failed")
            })
        print(response)
        return response
