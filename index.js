const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/account');
const bankRoutes = require('./routes/bank');

const server = express('server');

server.use(bodyParser.json());

//routes
server.use(accountRoutes);
server.use(bankRoutes);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://virtualClassUser:lMw0zRtkPJXtzWuY@cluster0.0o28abb.mongodb.net/VirtualClass?retryWrites=true&w=majority"
).then(result =>{
  server.listen(3000, () => console.log("bank server started"));
}).catch(err => console.log(err));
