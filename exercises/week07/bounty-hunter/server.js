const express = require('express');
const uuid = require('uuid');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('', (req, res) => {

})

app.post('', (req, res) => {

})

app.put('', (req, res) => {

})

app.delete('', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
