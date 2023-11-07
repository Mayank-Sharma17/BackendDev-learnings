const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// connection mongoose - mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoapp")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

// Middleware (plugin) -  jo bhe form data aaega use body mae dalne ka kaam karega
app.use(express.urlencoded({ extended: false })); // this middleware will call middleware 1

// custom middlewares
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`,
    (err, data) => {
      next(); // call next middleware function 2
    }
  );
  // req.myUserName = "Mayank";
});

// app.use((req, res, next) => {
//   console.log("Hello from middleware 2", req.myUserName);
//   next();
// });

// Routes
app.get("/users", async (req, res) => {
  // console.log("I am in get route");
  const allDbUsers = await User.find({});
  const html = `
    <ul>
        ${allDbUsers
          .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
          .join("")}
    </ul>
    `;
  res.send(html);
});

// REST API
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  //you can console.log(req.headers) for request headers
  res.setHeader("X-Author", "Mayank Sharma"); // custom header
  // Always add X to custom headers
  return res.json(allDbUsers); // send all users as a json obj
});

// grouping of the same routes
app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });

    const id = Number(req.params.id); // update the first name of the id 1001
    const body = req.body; // got the modified changed
    const user = users.find((user) => user.id === id); // Find the user with the specified ID

    // Update user properties based on the request body
    user.first_name = body.first_name ? body.first_name : user.first_name;
    user.last_name = body.last_name ? body.last_name : user.last_name;
    user.email = body.email ? body.email : user.email;
    user.gender = body.gender ? body.gender : user.gender;
    user.job_title = body.job_title ? body.job_title : user.job_title;

    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   return res.json({ status: "success", user });
    // });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Failed to write data to the file" });
      }
      res.json({ status: "success", user });
    });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.findIndex((user) => user.id === id);

    // users.splice(user, 1);

    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    //   if (err) {
    //     return res
    //       .status(500)
    //       .json({ error: "Failed to write data to the file" });
    //   }
    //   res.json({ status: "success", message: "user deleted" });
    // });
    return res.json({ status: "success" });
  });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

app.post("/api/users", async (req, res) => {
  // create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "success", id: users.length });
  // });
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  // console.log("result", result);

  return res.status(201).json({ msg: "success" });
});

// app.patch("/api/users/:id", (req, res) => {
//   // edit the user with id
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // delete the user with id
//   return res.json({ status: "pending" });
// });

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
