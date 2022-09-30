import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /*
  const client = createClient({
    url:
      "redis://default:IMNsVUEYDVsah2OlxEplqM7CIjbNJiwD@redis-15589.c267.us-east-1-4.ec2.cloud.redislabs.com:15589"
  });

  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  const data = JSON.parse(<string>await client.get("words"));
  await client.disconnect();
  */
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  // res.status(200).send(data);
  res.status(200).json(req.body);
}
