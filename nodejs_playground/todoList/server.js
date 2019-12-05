const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on: ' + port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var routes = require('./app/routes/routes'); //importing route
routes(app); //register the route
