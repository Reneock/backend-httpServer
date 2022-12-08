const express = require('express');
const server = express();

//handling request methods
const handleEveryRequest = (req, res) => {res.send("Response from server.use");}
const handleLoginRequest = (req, res) => {res.send("Welcome back, login now");}
const handleProfileRequest = (req, res) => {res.send("Create your profile");}
const handleHomeRequest = (req, res) => {res.send("<h1>This is the home Page</h1>");}

//handling server methods
server.post('/general', handleEveryRequest);
server.get('/login', handleLoginRequest);
server.put('/profile', handleProfileRequest);
server.use('/', handleHomeRequest);

server.listen(3000, () => {console.log("Request received, wait for response")});