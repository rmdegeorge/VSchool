const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt")
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(morgan("dev"));
app.use(bodyParser.json());

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todo-auth-example",
    {useMongoClient: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/auth', require('./routes/auth'));
app.use("/api/todo", require("./routes/todo.js"));

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
