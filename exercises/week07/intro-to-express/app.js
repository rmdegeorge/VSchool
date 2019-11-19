const express = require("express");     // import express
const uuid = require("uuid/v4")



const PORT = 8000;                      // assign your port

const app = express();                  // run express
app.use(express.json())

const todos=[];

app.get('/todo/:id', (request, response) => {
  console.log(request.params);
  console.log(request.query);
  response.send(todos);
});

app.post('/todo', (request, response) => {
  console.dir(request.body);
  todos.push({...request.body, _id: uuid()});
  response.send(todos);
})


app.listen(PORT,() => {
  console.log(`app is running on PORT: ${PORT}`);
});
