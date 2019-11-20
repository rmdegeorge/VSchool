const express = require('express')
const app = express()
const uuid = require('uuid')
const PORT = 5000
const database = require('./spots.json')
app.use(express.json())
app.get('/places', (request, response) => {
    response.send(database)
})
app.post('/places', (req, res)=> {
    req.body._id = uuid.v4()
    database.push(req.body)
    res.send({
        itemAdded: req.body
    })
})
app.put('/places/:_id', (req, res) => {
    let {_id} = req.params
    let updatedSpot = req.body
    // database.forEach(spot => spot._id === _id && Object.assign(spot, updatedSpot))
    database.forEach(spot => {
        if(spot._id === _id){
            updatedSpot = Object.assign(spot, updatedSpot)
        }
    } )
    res.send(updatedSpot)
})
app.delete('/places/:_id',(req, res) => {
    let {_id} = req.params
    let index = database.findIndex(spot => spot._id === _id)
    database.splice(index, 1)
    res.send('successfully deleted Item')
})
app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`)
})
