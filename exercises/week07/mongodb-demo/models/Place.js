const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  place: {
    type: String,
    required: true,
    unique: true, // this makes it so no two place fields can have the same value
  },
  price: {
    type: Number,
    default: 0 // this makes the field not required, but it will always have a value.
  },
  timeToGo: String,
  sitesToExplore: [String], // this makes it expect an Array of Strings
  gender: {
    type: String,
    enum: ['male', 'female', 'unspecified'] //this restricts input to the options you specify
  }
})

module.exports = mongoose.model('Place', placeSchema);
