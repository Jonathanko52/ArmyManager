import params from '../api/config/tableSchema'

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

export default function createTable() {
  return new Promise((resolve,reject)=>{
    AWS.config.update({region: "us-west-1"});
      dynamodb.createTable(params, function(err, data) {
          if (err) {
            console.error("Unable to create table", err);
          } else {
            console.log("Created table", data);
          }
      });
  })
}