const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log("Express server has started on port : "+port);
});

