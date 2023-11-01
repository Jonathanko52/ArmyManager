import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function readTable(req, res) {
    const params = {
        TableName: "Movies",
      };
    
      dynamodb.scan(params, function(err, data) {
        if (err) {
          console.error("Unable to find movies", err);
        } else {
          console.log(`Found ${data.Count} movies`);
          console.log(data.Items);
        }
      });
}