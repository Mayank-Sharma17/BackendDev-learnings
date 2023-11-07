const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// connection mongoose - mongodb
connectMongoDb("mongodb://127.0.0.1:27017/mongoapp").then(() =>
  console.log("MongoDB connected!")
);

// Middleware (plugin)
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter); // to ab jo routers mae "/" -> "/user" and "/:id" -> "/user/:id"

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
