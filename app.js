const express = require('express'); 
const router = require('./router/index');
const app = express();
const port = 3001;

app.use('/pages',router);

app.listen(port,() => console.log('starting'));