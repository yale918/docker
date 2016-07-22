const express = require('express');

const PORT = 8080;

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Hello world\n');    
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
