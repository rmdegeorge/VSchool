const express = require ('express');
const mongoose = require('mongoose');
const app = express();
const port = 5555;

app.use(express.json());
app.use("/place", require("./routes/placesRouter"));

mongoose.connect('mongodb://localhost:27017/vacationPlanner', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MongoDB is connected')
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
