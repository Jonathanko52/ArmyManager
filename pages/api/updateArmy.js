import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function updateArmy(req, res) {
    const params = {
        TableName: "Movies",
        Item: {
          title: { S: title },
          rtScore: { N: newRtScore.toString() },
        },
        ReturnConsumedCapacity: "TOTAL",
      };
    
      DynamoDB.putItem(params, function(err) {
        if (err) {
          console.error("Unable to find movie", err);
        } else {
          console.log(`Updated ${title} with new RT Score of ${newRtScore}%`);
        }
      });
}