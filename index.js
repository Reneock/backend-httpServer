const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {listBanksController, createBankController, updateBankController, deleteBankController} = require('./controllers');

const server = express('server');

server.use(bodyParser.json());

 server.get('/bank/:id?', listBanksController);
 server.post('/bank', createBankController);
// server.put('/bank', updateBankController);
// server.delete('/bank', deleteBankController);

mongoose.connect("mongodb+srv://virtualClassUser:lMw0zRtkPJXtzWuY@cluster0.0o28abb.mongodb.net/VirtualClass?retryWrites=true&w=majority"
//{ useNewUrlParser: true, useUnifiedTopology: true}
).then(result =>{
  server.listen(3000, () => console.log("bank server started"));
}).catch(err => console.log(err));
