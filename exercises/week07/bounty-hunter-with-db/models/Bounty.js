const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  living: Boolean,
  type: String,
})

module.exports = mongoose.model("Bounty", bountySchema)
