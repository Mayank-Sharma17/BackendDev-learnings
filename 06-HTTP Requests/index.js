import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>Hello my name is Mayank Sharma, I am learning about <strong>express.js</strong></p>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Email me: mayanksharmakv@gmail.com</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
