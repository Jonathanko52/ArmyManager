const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

export default function retrieveArmy(req, res) {
  return new Promise((resolve,reject)=>{
    const params = {
      TableName: "WarhammerArmies",
    };

    dynamodb.scan(params, function(err, data) {
      if (err) {
        console.error("Unable to find army", err);
      } else {
        res.status(400).send(data.Items)
      }
    });
  })
}