
// module.exports = {
//     aws_table_name: 'dynamodb-test',
//     credentials: {
//       //Provide details for local configuration
//       accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
//       secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
//     },
//     aws_remote_config: {
//       accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
//       secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
//     },
//     region: 'us-east-1'
// };

// accessKeyId: 'ACCESS_KEY_ID',
// secretAccessKey: 'SECRET_ACCESS_KEY',


module.exports = {
    aws_table_name: 'dynamodb-test',
    credentials: {
      //Provide details for local configuration
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    },
    aws_remote_config: {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    },
    region: 'us-east-1'
    //should be US west to access table. 
    //app seems to fail to read 'region' value on itinal boot
    //reads it after the initial boot if I change he value
};