const express = require("express");
const cors = require("cors");
const router = express.Router();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./Routers/user.router")
const bookRouter = require("./Routers/book.router")
const jwt = require('jsonwebtoken')
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
app.use("/book", bookRouter);
const secret = process.env.SECRET;
app.post ("/jwt" , (req,res) => {
  const user = req.body
  const token = jwt.sign(user ,secret ,{expiresIn :"1h"} )
  console.log(token);
  res.send({token})
})
app.get('/verifyToken', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(403).json({ message: 'Failed to authenticate token' });
  }
});
app.get("/", (req, res) => {
  res.send("<h1> Welcome to Ebook Project</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
