const express = require("express");
const cors = require("cors");
const books = require("./models/books");
const jwt = require("jsonwebtoken");
const users = require("./models/users");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

// Function to veriy user with authorization
const verifyUser = (req, res, next) => {
  const accessTokenHeader = req.headers["authorization"];

  if (!accessTokenHeader) {
    return res.sendStatus(401);
  }

  const accessToken = accessTokenHeader.split(" ")[1];

  if (!accessToken) {
    return res.json("Unauthorized");
  }

  jwt.verify(accessToken, process.env.SECRET_TOKEN, (err, user) => {  //Secret token from .env file will go here
    if (err) {
      return res.status(403).send("Invalid or expired access token");
    }
    req.user = user;
    next();
  });
};

// Login route to access authorization token
app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const regUser = new users({
      email,
      pass,
    });
    const saveUser = await regUser.save();
    const authToken = jwt.sign({ user: saveUser }, process.env.SECRET_TOKEN, {
      expiresIn: "7d",
    });
    res.json({
      message: "User Logged In",
      authToken: `Bearer ${authToken}`,
      saveUser,
    });
  } catch (error) {
    console.log(error);
    res.json("Error occurred");
  }
});

// Route to fetch book data with pagination
// Query example: http://localhost:3001/books?page=1&limit=5
app.get("/books", async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10;
  
    try {
      const skip = (page - 1) * limit;
      const bookData = await books.find({}).skip(skip).limit(limit);
      res.json(bookData);
    } catch (error) {
      res.json("Error fetching books");
    }
  });
  

// Route to add a book
app.post("/books", verifyUser, async (req, res) => {
  const user = req.user;
  const { name, author, description } = req.body;
  try {
    if (user) {
      const regBook = new books({
        name,
        author,
        description,
      });
      const saveBook = await regBook.save();
      res.json({ message: "Book saved successfully.", data: saveBook });
    } else {
      res.json("No user found");
    }
  } catch (error) {
    res.json("Error adding book");
  }
});

// Route to find book of a specific id
app.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const findBook = await books.findOne({ _id: id });
    if (id) {
      res.json({ message: "Book found", data: findBook });
    } else {
      res.json("No book found with that id");
    }
  } catch (error) {
    res.json("Error");
  }
});

// Route to update a book
app.put("/books/:id", verifyUser, async (req, res) => {
  const user = req.user;
  console.log(user);
  const id = req.params.id;
  const { name, author, description } = req.body;
  try {
    if (user) {
      const bookData = await books.updateOne(
        { _id: id },
        { $set: { name: name, author: author, description: description } }
      );
      res.json("Book updated successfully");
    } else {
      res.json("No user found");
    }
  } catch (error) {
    res.json("Error updating book");
  }
});

// Route to delete a book
app.delete("/books/:id", verifyUser, async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  try {
    if (user) {
      const bookData = await books.deleteOne({ _id: id });
      res.json("Book deleted successfully");
    } else {
      res.json("No user found");
    }
  } catch (error) {
    res.json("Error deleting book");
  }
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});
