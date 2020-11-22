const express = require('express');
const simpleCode = express();

//middlewares
simpleCode.use(express.json());
simpleCode.use(express.urlencoded({extended: false}));

//routes
simpleCode.use(require('./routes/apiPersonRoutes'));

port = process.env.PORT || 3000;
simpleCode.listen(port);
console.log('Simple code started on port '+port);