const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

export default function deleteArmy(req) {
  return new Promise((resolve,reject)=>{
    AWS.config.update({region: "us-west-1"});
      const params = {
          TableName: "WarhammerArmies",
          Key: {
            armyName: { S: req.body },
          },
      };
      
        dynamodb.deleteItem(params, function(err) {
          if (err) {
            console.error("Unable to find army in database", err);
          } else {
            console.log(`Deleted ${req.body} from the database`);
          }
        });
    })
  }