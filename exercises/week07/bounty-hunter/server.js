// server.js

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// const database = require('./bountiesData.json');
// app.use(express.json());

app.use("/bounty", require("./routes/bountyRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// app.get('/bounty', (req, res) => {
//   res.send(database);
// });
//
// app.get('/bounty/:_id', (req, res) => {
//   const foundBounty = database.find(bounty => bounty._id == req.params._id)
//   res.send(foundBounty);
// })
//
// app.post('/bounty', (req, res) => {
//   req.body._id = uuid.v4();
//   database.push(req.body);
//   res.send(req.body);
// });
//
// app.put('/bounty/:_id', (req, res) => {
//   let {_id} = req.params;
//   let updatedBounty = req.body;
//   database.forEach(bounty => bounty._id == _id && Object.assign(bounty, updatedBounty));
//   res.send(updatedBounty);
// });
//
// app.delete('/bounty/:_id', (req, res) => {
//   let {_id} = req.params;
//   let index = database.findIndex(bounty => bounty._id == _id);
//   database.splice(index, 1);
//   res.send(`Successfully deleted Bounty`);
// });
