import express from "express";
import bodyParser from "body-parser";
// Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
import { dirname } from "path"; // we have to return the complete path of the file dynamically
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); // return the html file from our server
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
