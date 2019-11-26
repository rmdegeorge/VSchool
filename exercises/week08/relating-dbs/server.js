const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require("mongoose")
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/relating-dbs',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    () => console.log("Connected to the DB")
)

app.use("/author", require('./routes/authorRouter.js'))
app.use("/book", require('./routes/bookRouter.js'))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))