const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const bcryptSalt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const User = require('./models/User.js')
const Place = require('./models/Place.js')
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader')
const multer = require('multer')
const fs = require('fs')

// new web server instance
require('dotenv').config()
const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads')) // handles static files
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
)

// routes
app.get('/test', (req, res) => {
  res.json('test ok')
})

// register endpoint
app.post('/register', async (req, res) => {
  // connect to mongodb
  mongoose.connect(process.env.MONGO_URL)
  // destructing the request body data
  const { name, email, password } = req.body // This works because of express.json()
  // creating a new user collection
  try {
    // attemp to create a new user document
    const userDocument = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt)
    })
    res.json(userDocument)
  } catch (error) {
    // check for duplicate key error (code 11000 is Mongo duplicate key error)
    if (error.code === 11000 && error.keyPattern.email) {
      res.status(422).json({ error: 'Email already exists' })
    } else {
      res.status(422).json({ error: 'Registration failed' })
    }
  }
})

// login endpoint
app.post('/login', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL)
  const { email, password } = req.body
  try {
    // attempt to find user
    const userDocument = await User.findOne({ email })
    // user not found
    if (!userDocument) {
      return res.status(404).json({ error: 'User not found' })
    }
    // if user found
    if (userDocument) {
      const passwordMatches = bcrypt.compareSync(
        password,
        userDocument.password
      )
      // password matches
      if (passwordMatches) {
        // 4 args. 1. payload, 2. secret, 3. options, 4. callback creating the token and error
        jwt.sign(
          { email: userDocument.email, id: userDocument._id },
          process.env.JWT_SECRET,
          {},
          (err, token) => {
            // error creating token
            if (err) throw err
            // token created
            res.cookie('token', token).json(userDocument) // sets cookie in browser called "token" with the value of the token and returns the user data
          }
        )
        // return res.status(200).json(userDocument);
      } else {
        return res.status(401).json({ error: 'Password incorrect' })
      }
    }
  } catch (error) {
    return res.status(500).json({ error: 'Login failed' })
  }
})

// Profile endpoint
// get the token from the cookies. cookie is automatically attached in the request header
app.get('/profile', (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // need this to fetch users data
  const { token } = req.cookies // read cookie that browser sent
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      if (err) throw err
      // if verification succeeds return decoded user data
      const { name, email, _id } = await User.findById(userData.id)
      res.json({ name, email, _id })
    })
  } else {
    res.json(null)
  }
})

// Logout endpoint
app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true) // sets the cookie to nothing and responds back with true json message
})

// image upload by url endpoint
app.post('/upload-by-link', async (req, res) => {
  // get url link from request
  const { link } = req.body
  const newName = 'photo_' + Date.now() + '.jpg' // Results in something like: "1708732841952.jpg"
  // download image using imageDownloader. Gets the url link and the destination you want to save
  await imageDownloader.image({
    url: link,
    dest: __dirname + '/uploads/' + newName // full path + file name
  })
  // returns the relative path
  res.json(newName)
})

// image upload endpoint with multer middleware
const photosMiddleware = multer({ dest: 'uploads/' }) // 1. Multer middleware intercepts the request
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  // 2. Files are saved to 'uploads/' directory by multer
  // 3. req.files contains array of saved file information
  const uploadedFiles = []
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i] // get path and original name of the file
    // 4. Process each file and extract the extension from originalname
    const parts = originalname.split('.') // split by . to get the file extension
    const ext = parts[parts.length - 1] // get the last part of the array which is the file extension
    // 5. Rename the file to include extension
    const newPath = path + '.' + ext // making the new path
    fs.renameSync(path, newPath) // rename the original path to the new path
    // 6. Clean path for storage
    const cleanPath = newPath.replace(/^uploads[\/\\]/, '') // remove the 'uploads/' from the path
    uploadedFiles.push(cleanPath) // push the clean path to the array
  }
  console.log('uploadedFiles', uploadedFiles)
  // 7. Send processed filenames back to client
  res.json(uploadedFiles)
})

// places endpoint to store all our places
app.post('/places', (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  const { token } = req.cookies // read cookie that browser sent
  const {
    title,
    address,
    city,
    country,
    addedPhotos,
    description,
    price,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests
  } = req.body // destructing the request body data

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      if (err) throw err
      const placeDoc = await Place.create({
        owner: userData.id,
        price,
        title,
        city,
        country,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests
      })
      res.json(placeDoc)
    })
  }
})

// get all places endpoint
app.get('/places', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  // get all places
  res.json(await Place.find())
})

// get single place endpoint
app.get('/places/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  const { id } = req.params // get id from url
  const placeDoc = await Place.findById(id)
  res.json(placeDoc)
})

// update place endpoint
app.put('/places', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  const { token } = req.cookies // read cookie that browser sent
  const {
    id,
    title,
    city,
    country,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price
  } = req.body // destructing the request body data

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      if (err) throw err
      const placeDoc = await Place.findById(id) // find place by id
      // check if user from the token id is the owner of placeDoc.owner the ObjectId in our database
      if (userData.id === placeDoc.owner.toString()) {
        // .set() mongoose method to update many properties at the same time
        placeDoc.set({
          title,
          address,
          city,
          country,
          photos: addedPhotos,
          description,
          perks,
          extraInfo,
          checkIn,
          checkOut,
          maxGuests,
          price
        })
        // save changes to database
        await placeDoc.save()
        res.json('ok')
      }
    })
  }
})

// get user places
app.get('/user-places', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL) // connect to mongodb
  const { token } = req.cookies // read cookie that browser sent

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
      if (err) throw err
      const places = await Place.find({ owner: userData.id })
      res.json(places)
    })
  }
})

// start server
app.listen(3000)
