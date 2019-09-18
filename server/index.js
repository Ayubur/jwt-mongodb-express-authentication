// Main starting point of the Application
const express = require('express');
const http= require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

//App setup

app.use(morgan('combined'));
app.use(bodyParser.json({urlencoded: true}));
router(app);


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running at port ${port}`));
