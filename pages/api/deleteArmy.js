import AWSConfig from './config/aws-config'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);

export default function deleteArmy(req, res) {
    const params = {
        TableName: "Movies",
        Key: {
          title: { S: title },
        },
      };
    
      dynamodb.deleteItem(params, function(err) {
        if (err) {
          console.error("Unable to find movie", err);
        } else {
          console.log(`Deleted ${title}`);
        }
      });
  }



