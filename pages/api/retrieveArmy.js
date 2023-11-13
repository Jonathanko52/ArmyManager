import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function retrieveArmy(req, res) {
  return new Promise((resolve,reject)=>{
    const params = {
      TableName: "WarhammerArmies",
    };
    AWS.config.update({region: 'us-west-1'});

    dynamodb.scan(params, function(err, data) {
      if (err) {
        console.error("Unable to find army", err);
      } else {
        console.log("Found armies");
        res.status(400).send(data.Items)
      }
    });
  })
}