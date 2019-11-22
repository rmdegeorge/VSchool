const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  living: {
    type: String,
    enum: ["Alive", "Dead"]
  },
  type: {
    type: String,
    enum: ["Sith", "Jedi"]
  },
})

module.exports = mongoose.model("Bounty", bountySchema)
