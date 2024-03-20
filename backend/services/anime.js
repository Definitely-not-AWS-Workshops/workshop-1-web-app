import { docClient } from "../config/dynamoDBConfig.js";
import { ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const getAnimeService = async () => {
    const command = new ScanCommand({
       TableName: "Anime",
     });
     const response = await docClient.send(command);
     return response.Items;
 };

 const createAnimeService = async (item) => {
    const command = new PutCommand({
      TableName: "Anime",
      Item: item
    });
    const response = await docClient.send(command);
    return response;
};

export {getAnimeService, createAnimeService}

