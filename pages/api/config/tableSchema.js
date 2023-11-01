module.exports = {
    TableName: "Movies",
    KeySchema: [{ AttributeName: "title", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "title", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };