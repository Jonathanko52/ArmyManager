import AWSConfig from './config/aws-config'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function addArmy(req, res) {
    const params = {
      TableName: "Movies",
      Item: {
        title: { S: title },
        rtScore: { N: rtScore },
      },
    };
  
    dynamodb.putItem(params, function(err) {
      if (err) {
        console.error("Unable to add movie", err);
      } else {
        console.log(`Added ${title} with a Rotten Tomatoes Score of ${rtScore}%`);
      }
    });
  }