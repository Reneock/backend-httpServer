const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express('server');

const loginRequestHandler = (req, res) => {
  //console.log(req);
  //below is manual method of body-parser
  // let body = "";
  // req.on('data', chunk => { body += chunk; });

  // req.on('end', ()=>{ 
  //   //parse with regExp
  //   console.log(body); 
  // });

  console.log(req.body.email);
  console.log(req.body.password);
  res.send('Done');
}
//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({extended: false}));

//route 
server.post('/login', loginRequestHandler);
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