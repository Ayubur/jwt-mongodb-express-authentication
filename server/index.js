// Main starting point of the Application
const express = require('express');
const http= require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();


// mongodb setup
mongoose.connect('mongodb://127.0.0.1:27017/auth', {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//App setup

app.use(morgan('combined'));
app.use(bodyParser.json({urlencoded: true}));
router(app);


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running at port ${port}`));
