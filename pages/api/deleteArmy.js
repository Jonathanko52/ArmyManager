import AWSConfig from './config/aws-config'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);

export default function deleteArmy(req) {
  console.log("REQ", req.body)
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
            console.error("Unable to find movie", err);
          } else {
            console.log(`Deleted ${req.body} from the database`);
          }
        });
    })
  }