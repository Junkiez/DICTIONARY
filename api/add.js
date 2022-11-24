import { createClient } from "redis";

export default async function handler(req, res) {
  try{
    console.log(req.body.ulinks);
  }catch(error){
    console.error(error);
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(`<center><h1>Fields are empty</h1><center><center><a href="/">Go back</a><center>`);
    return;
  }
  if(req.body.meaning == ""){
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(`<center><h1>Fields are empty</h1><center><center><a href="/">Go back</a><center>`);
    return;
  }
  const size = new TextEncoder().encode(JSON.stringify(req.body)).length
  const kiloBytes = size / 1024;
  //const megaBytes = kiloBytes / 1024;
  if(kiloBytes > 3){
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(`<center><h1>Data too large</h1><center><center><a href="/">Go back</a><center>`);
    return;
  }
  const client = createClient({
    url:
      "redis://default:IMNsVUEYDVsah2OlxEplqM7CIjbNJiwD@redis-15589.c267.us-east-1-4.ec2.cloud.redislabs.com:15589"
  });

  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  req.body.ulinks = [req.body.ulinks];
  let exists = JSON.parse(await client.get("words"));
  exists.push(req.body);
  console.log(exists);
  await client.set("words", JSON.stringify(exists));
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
  res.writeHead(200, { 'Content-Type':'text/html'});
  res.end(`<center><h1>Succesful</h1><center><center><a href="/">Go back</a><center>`);
}
