const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// challenge read the message.txt file and print the content in the terminal
fs.readFile("./message.txt", "utf8" ,(err, data) => {
  if (err) throw err;
  console.log(data);
});
