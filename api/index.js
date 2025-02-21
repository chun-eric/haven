const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");

// new web server instance
require("dotenv").config();
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin:"http://localhost:5173",
  })
);

// routes
app.get("/test", (req, res) => {
  res.json("test ok");
});

// register page
app.post("/register", async (req, res) => {
  // connect to mongodb
  mongoose.connect(process.env.MONGO_URL);
  // destructing the request body data
  const { name, email, password } = req.body; // This works because of express.json()
  
  // creating a new user collection
  try {
    // attemp to create a new user document
    const userDocument = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDocument);
  } catch (error) {
    // check for duplicate key error (code 11000 is Mongo duplicate key error)
    if (error.code === 11000 && error.keyPattern.email) {
      res.status(422).json({error: "Email already exists"});
    } else {
      res.status(422).json({error: "Registration failed"});;
    }
  }
});

// login page
app.post("/login", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password} = req.body;

  try {
    // attempt to find user
    const userDocument = await User.findOne({ email});
    
    // user not found
    if (!userDocument) {
      return res.status(404).json({error: "User not found"})
    } 

    // if user found
    if (userDocument) {
      const passwordMatches = bcrypt.compareSync(password, userDocument.password)
      // password matches
      if (passwordMatches) {
        // 4 args. 1. payload, 2. secret, 3. options, 4. callback creating the token and error
     jwt.sign({ email: userDocument.email, id: userDocument._id }, process.env.JWT_SECRET, {}, (err, token) => {
          // error creating token
          if (err) {
            throw err;
          }
          res.cookie("token", token).json(userDocument); // sets cookie in browser called "token" with the value of the token and returns the user data
        });
        // return res.status(200).json(userDocument);
      } else {
        return res.status(401).json({error: "Password incorrect"})
    }
  } 
  
  } catch (error) {
      return res.status(500).json({error: "Login failed"})
    }
  
})

app.listen(3000);
