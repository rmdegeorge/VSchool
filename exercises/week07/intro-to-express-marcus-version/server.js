const express = require('express');
const app = express();
const uuid = require('uuid/v4')
app.use(express.json());

const PORT = 3000;

const database = [
  {
    "place": "Mexico",
    "price": 300,
    "timeToGo": "Spring",
    "_id": 1
  },
  {
    "place": "Thailand",
    "price": 200,
    "timeToGo": "Summer",
    "_id": 2
  },
  {
    "place": "Japan",
    "price": 100,
    "timeToGo": "Summer",
    "_id": 3
  },
  {
    "place": "Brazil",
    "price": 500,
    "timeToGo": "Winter",
    "_id": 4
  },
  {
    "place": "Canada",
    "price": 400,
    "timeToGo": "Fall",
    "_id": 5
  }
]

app.get('/places', (req, res) => {
  res.send(database);
})

app.post('/places', (req, res) => {
  req.body._id = uuid()
  database.push(req.body);
  res.send({
    itemAdded: req.body
  })
})

app.delete('/places/:_id', (req, res) => {
  let {_id} = req.params;
  let index = database.findIndex(spot => spot._id == _id);
  database.splice(index, 1);
  res.send(database);
})



app.put('/places/:_id', (req, res) => {
  let {_id} = req.params;
  let updatedSpot = req.body;
  database.forEach(spot => spot._id === _id && Object.assign(spot, updatedSpot))
  // database.forEach(spot => {
  //   if (spot._id === _id) {
  //     Object.assign(spot, updatedSpot)
  //   }
  // })
  res.send(updatedSpot)
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
