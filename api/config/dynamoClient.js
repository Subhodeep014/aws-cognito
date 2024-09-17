// dynamoClient.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import dotenv from 'dotenv'
dotenv.config();
const dynamoClient = new DynamoDBClient({
  region: process.env.AWS_REGIONN,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
export default dynamoClient;