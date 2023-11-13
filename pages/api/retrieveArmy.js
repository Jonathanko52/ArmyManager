import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();


export default function retrieveArmy(req, res) {
  AWS.config.update(AWSConfig);
  const params = {
    TableName: "WarhammerArmies",
  };
  dynamodb.scan(params, function(err, data) {
    if (err) {
      console.error("Unable to find movie", err);
    } else {
      console.log("Found movie", data.Items);
      res.status(400).send(data.Items)
    }
  });
}