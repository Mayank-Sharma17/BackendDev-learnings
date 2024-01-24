import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true })); // parse the infromation

const BandNameGenerator = (req, res, next) => { // 
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(BandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // return the html file from our server
});

app.post("/submit", (req, res) => {
  res.send(
    `<h1 align="center">Your band name is:</h1><h2 align="center">${bandName}⚡</h2>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
