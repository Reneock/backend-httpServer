const express = require('express');
const server = express('server');

//handling request methods
const handleEveryRequest = (req, res) => {res.send("Response from server.use");}
const handleLoginRequest = (req, res) => {res.send("Welcome back, login now");}
const handleProfileRequest = (req, res) => {res.send("Create your profile");}
const handleHomeRequest = (req, res) => {res.send("<h1>This is the home Page</h1>");}

//introducing middleware
const middlewareFunction = (req, res, next) => {
  console.log ("introducing middleware");
  //checking for mistakes
  next();
}

//handling specific middleware
const generalRouteSpecificMiddleware = (req, res, next) => {
  console.log ("general route middleware executed");
  next();
}

const loginRouteSpecificMiddleware = (req, res, next) => {
  console.log ("login route middleware executed");
  next();
}

const profileRouteSpecificMiddleware = (req, res, next) => {
  console.log ("profile route middleware executed");
  next();
}

const homeRouteSpecificMiddleware = (req, res, next) => {
  console.log ("home route middleware executed");
  next();
}

//generalmiddleware
server.use(middlewareFunction);

//handling server methods(routes)
server.post('/general',generalRouteSpecificMiddleware, handleEveryRequest);
server.get('/login', loginRouteSpecificMiddleware, handleLoginRequest);
server.put('/profile',profileRouteSpecificMiddleware, handleProfileRequest);
server.use('/',homeRouteSpecificMiddleware, handleHomeRequest);

server.listen(3000, () => console.log("Request received, wait for response"));
