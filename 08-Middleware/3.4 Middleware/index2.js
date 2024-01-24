import express from "express";
import morgan from "morgan"; // HTTP request logger middleware for node.js
// It is used to logging request comming from your server

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
