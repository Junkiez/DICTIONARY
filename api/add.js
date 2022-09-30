import { createClient } from "redis";

export default async function handler(req, res) {
  const client = createClient({
    url:
      "redis://default:IMNsVUEYDVsah2OlxEplqM7CIjbNJiwD@redis-15589.c267.us-east-1-4.ec2.cloud.redislabs.com:15589"
  });

  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  req.body.ulinks = [req.body.ulinks];
  await client.set(req.body.word, JSON.stringify(req.body));
  await client.disconnect();
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
  res.status(200).send(req.body);
}
