import express from "express";
const app = express();
const port = 3000; // you can choose any available port

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});