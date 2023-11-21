const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

export default function updateArmy(req) {
  return new Promise((resolve,reject)=>{
    AWS.config.update({region: "us-west-1"});
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
  })
}
