const express = require("express");
const cors = require("cors");
const router = express.Router();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./Routers/user.router")

dotenv.config();

//creat server Ebook
const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect mongoDB
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h1> Welcome to Ebook Project</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
