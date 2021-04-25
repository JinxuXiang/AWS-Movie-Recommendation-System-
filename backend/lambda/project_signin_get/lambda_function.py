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
    key1 = "userName"
    key2 = "userPass"
    value1 = event["multiValueQueryStringParameters"][key1][0]
    value2 = event["multiValueQueryStringParameters"][key2][0]
    print("key1:", key1, "key2:", key2)
    print("value1:", value1, "value2:", value2)
    sql = "SELECT * FROM users WHERE userName = '{0}' and userPassword = '{1}'".format(value1, value2)
    print(sql)
    with conn.cursor() as cur:
        cur.execute(sql)
        rows = cur.fetchall()
    
    results = {}
    for i in range(len(rows)):
        row = rows[i]
        result = {}
        result["userId"] = row[0]
        result["userName"] = row[1]
        result["userPass"] = row[2]

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
