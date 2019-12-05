// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/bounty", require("./routes/bountyRoutes"));

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MongoDB is connected')
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
