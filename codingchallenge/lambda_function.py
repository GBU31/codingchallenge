import json
import boto3

def lambda_handler(event, context):
    
    # Create a DynamoDB client
    try:
        dynamodb = boto3.resource('dynamodb', aws_access_key_id="", aws_secret_access_key="")

    except Exception as e:
        print(e)
    
    table_name = "Posts-table"
    table = dynamodb.Table(table_name)
    res = table.get_item(Key={"user": "daniel_tashman"})
    
    if "Item" in res:
        Posts = {"user":res["Item"]["user"],
        "id" : str(res["Item"]["id"]),
        "when" : str(res["Item"]["when"]),
        "title" :  res["Item"]["title"],
        "body" :  res["Item"]["body"],}
        
    
    return {
        'statusCode': 200,
        'body': json.dumps(Posts)
    }
