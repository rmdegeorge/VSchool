const express = require('express');
const uuid = require('uuid');
const app = express();

const PORT = 3000;
const database = require('./boutiesData.json');
app.use(express.json());

app.get('/bounty', (req, res) => {
  res.send(database);
});

app.post('/bounty', (req, res) => {
  req.body.id = uuid.v4();
  database.push(req.body);
  res.send({
    itemAdded: req.body
  });
});

app.put('/bounty/:id', (req, res) => {
  let {id} = req.params;
  let updatedBounty = req.body;
  database.forEach(bounty => bounty.id == id && Object.assign(bounty, updatedBounty));
  res.send(updatedBounty);
});

app.delete('/bounty/:id', (req, res) => {
  let {id} = req.params;
  let index = database.findIndex(bounty => bounty.id == id);
  database.splice(index, 1);
  res.send(`Successfully deleted Bounty`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
