import AWSConfig from './config/aws-config'
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function updateArmy(req) {
  let parsedArmy = JSON.parse(req.body)
  let armyName = parsedArmy.armyName

    const params = {
        TableName: "WarhammerArmies",
        Item: {
          armyName: { S: parsedArmy.armyName },
          armyFaction:{ S: parsedArmy.faction},
          armyString: { S: req.body },
        },
        ReturnConsumedCapacity: "TOTAL",
      };
    
      dynamodb.putItem(params, function(err) {
        if (err) {
          console.error("Unable to find movie", err);
        } else {
          console.log(`UPDATED ${armyName}` )
        }
      });
}
