module.exports = {
    TableName: "WarhammerArmies",
    KeySchema: [
      { 
        AttributeName: "armyName", 
        KeyType: "HASH" 
      }   
    ],
    AttributeDefinitions: [
      {
        AttributeName: "armyName", 
        AttributeType: "S" 
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };