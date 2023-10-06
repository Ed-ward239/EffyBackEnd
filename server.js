const db = require("./models");
const controller = require("./controllers/controller")
const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require('body-parser');

app.use(cors());

// parse requests of content-type - application/jason
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    let data = {...req.body}
    controller.getAllData(data).then(resp => res.json(resp));
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});