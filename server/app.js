const express = require('express');
const morgan = require('morgan');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'));

app.get('*', (req, res) => {
    res
    .status(404)
    .send("404 Page not found.")
});
