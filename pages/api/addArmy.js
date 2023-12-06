const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

export default function addArmy(req) {
  return new Promise((resolve,reject)=>{

    AWS.config.update({region: "us-west-1"});
      let parsedArmy = JSON.parse(req.body)
      const params = {
        TableName: "WarhammerArmies",
        Item: {
          armyName: { S: parsedArmy.armyName },
          armyFaction:{ S: parsedArmy.faction},
          armyString: { S: req.body },
          armyPoints: {S:parsedArmy.armyPoints.toString()}
        },
      };
    
      dynamodb.putItem(params, function(err) {
        if (err) {
          console.error("Unable to add army to database", err);
        } else {
          console.log(`Added Army ${parsedArmy.armyName} to database. Did this overwrite the old one?`);
        }
      });
  })
}