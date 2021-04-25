import json
import sys
import pymysql
import logging
import boto3
# import two packages to help us with dates and date formatting
from time import gmtime, strftime
def lambda_handler(event, context):
    # TODO implement
    client = boto3.client('lex-runtime')
    text = event["messages"][0]["unstructured"]["text"]
    msgs = text.split("|")
    msg = msgs[0]
    user_name = msgs[1]
    response = client.post_text(
    botName='movie',
    botAlias='movies',
    userId = user_name,
    sessionAttributes={
    },
    requestAttributes={
    },
    inputText=msg
    ) 
    print(response)
    msg = response["message"]
    messages = [{'type': 'unstructured', 'unstructured': {'text': x}} for x in msg.split("\n") if x!=""]
    
    return {
        'statusCode': 200,
        'messages': messages
    }
