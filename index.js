const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const ensureDBConnection = require("./config/DB");
const router = require("./router");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json({ urlencoded: true }));
// app.use(async (req, res, next) => {
//   await ensureDBConnection();
//   next();
// })
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running at port ${port}`))