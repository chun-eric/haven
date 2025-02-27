const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // tells Mongodb this ID refers to a User document
  title: String,
  address: String,
  city: String,
  country: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number
})

const PlaceModel = mongoose.model('Place', placeSchema)

module.exports = PlaceModel
