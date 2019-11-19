const express = require("express");
const uuid = require("uuid/v4");

const app = express();
app.use(express.json());

const PORT = 3000;

let todos = [
  {
    "name": "Todo Name 1",
    "description": "The description 1 of the Todo",
    "imageUrl": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg",
    "completed": false,
    "_id": "a0dce87d-1bec-4cb4-bd2c-040bf096f603"
  },
  {
    "name": "Todo Name 2",
    "description": "The description 2 of the Todo",
    "imageUrl": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg",
    "completed": true,
    "_id": "51b0fce9-8588-48b0-8eb6-3eb62083ad6e"
  }
]

app.get('/todo', (req, res) => {
  console.log(req.query);
  res.send(todos);
});

app.post('/todo', (req, res) => {
  console.log(req.body);
  todos.push({...req.body, _id: uuid()});
  res.send(todos);
});

app.put('/todo/', (req, res) => {
  console.log(req);
  res.send()
});

app.delete('/todo', (req, res) => {
  console.log(req);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
})
