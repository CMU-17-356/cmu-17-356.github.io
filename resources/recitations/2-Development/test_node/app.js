var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/', (reg, res) => {
    res.send('hello world!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
