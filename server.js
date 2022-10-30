const express = require('express');
const app = express();
const port = 3000;

const server = app.listen(port, function () {
    console.log("Express server has started on port : "+port);
});

app.get('/', function (req, res) {
    res.send('Hello Nodemon');
});