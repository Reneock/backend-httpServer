const express = require('express');

const handleAllRequests = (requestObject, responseObject) => {
  console.log("Hello, a request just came through");
  const url = requestObject.url;
  //incase of html challenge : responseObject.setHeader ("content-type","text/html");
  responseObject.write ("<h1>Page not found</h1>");
 
  responseObject.end("");
}

const handleHomeRequest = (req, res) => {
  res.send("<h1>This is the home Page</h1>");
}

const handleLoginRequest = (req, res) => {
  res.send("<h1>Welcome back, login now</h1>");
}

const handleSignupRequest = (req, res) => {
  res.send("<h1>Join us now, signup</h1>");
}

const handleProfileRequest = (req, res) => {
  res.send("<h1>Create your profile</h1>");
}

const handleAboutRequest = (req, res) => {
  res.send("<h1>How we started</h1>");
}

const handleGalleryRequest = (req, res) => {
  res.send("<h1>Browse through the gallery</h1>");
}

const handleServicesRequest = (req, res) => {
  res.send("<h1>Enjoy our services</h1>");
}

const server = express();
server.use('/about', handleAboutRequest);
server.use('/gallery', handleGalleryRequest);
server.use('/services', handleServicesRequest);
server.use('/login', handleLoginRequest);
server.use('/signup', handleSignupRequest);
server.use('/profile', handleProfileRequest);
server.use('/', handleHomeRequest);
server.use(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=>{console.log("Request received, wait for response")});