import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function retrieveArmy(req, res) {

  const params = {
    TableName: "Movies",
    Key: {
      title: { S: "TEST" },
    },
  };

  dynamodb.getItem(params, function(err, data) {
    if (err) {
      console.error("Unable to find movie", err);
    } else {
      console.log("Found movie", data);
    }
  });
}