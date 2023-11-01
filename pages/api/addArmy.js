import AWSConfig from './config/aws-config'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);



export default function addArmy(req, res) {
  console.log("ADD ARMY API HIT",typeof JSON.parse(req.body))
    let parsedArmy = JSON.parse(req.body)
    const params = {
      TableName: "WarhammerArmies",
      Item: {
        armyName: { S: parsedArmy.armyName },
        armyFaction:{ S: parsedArmy.faction},
        armyString: { S: req.body },
      },
    };
  
    dynamodb.putItem(params, function(err) {
      if (err) {
        console.error("Unable to add movie", err);
      } else {
        // console.log(`Added ${title} with a Rotten Tomatoes Score of ${rtScore}%`);
      }
    });
  }