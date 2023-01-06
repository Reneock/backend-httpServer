const express = require('express');
const path = require('path');
const server = express('server');

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));
// const serveHomePage = (req, res) =>{
//   //res.send('Welcome to the home Page');
//   //finding the file
//   const homepageFilePath = path.join(__dirname, 'public', 'index.html');
//   //sending the file
//   res.sendFile(homepageFilePath);
// }

// const serveProfilePage = (req, res) =>{
//   const profilepageFilePath = path.join(__dirname, 'public', 'profile.html');
//   res.sendFile(profilepageFilePath);
// }

//route definitions
// server.get('/', serveHomePage);
// server.get('/profile', serveProfilePage);
//nb css doesn't work with maual approach. the above commented is manual

server.listen(3000, () => console.log("Request received, wait for response"));