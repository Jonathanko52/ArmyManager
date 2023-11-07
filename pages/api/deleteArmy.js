import AWSConfig from './config/aws-config'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();
AWS.config.update(AWSConfig);

export default function deleteArmy(req, res) {
  let parsedArmy = JSON.parse(req.body)
  let armyName = parsedArmy.armyName

    const params = {
        TableName: "WarhammerArmies",
        Item: {
          armyName: { S: parsedArmy.armyName },
        },
      };
    
      dynamodb.deleteItem(params, function(err) {
        if (err) {
          console.error("Unable to find movie", err);
        } else {
          console.log(`Deleted ${title} from the database`);
        }
      });
  }



  // let armyName = parsedArmy.armyName

  //   const params = {
  //       TableName: "WarhammerArmies",
  //       Item: {
  //         armyName: { S: parsedArmy.armyName },
  //         armyFaction:{ S: parsedArmy.faction},
  //         armyString: { S: req.body },
  //       },
  //       ReturnConsumedCapacity: "TOTAL",
  //     };