const http = require('http');

const handleAllRequests = (requestObject, responseObject) => {
  console.log("Hello, a request just came through");
  const url = requestObject.url;

  //console.log(requestObject);
  //html can be written in the responses below
  // responseObject.write("Response is now ready \n");
  // responseObject.write("A follow up response on the above request");

  //allocating specific urls with their respective handles
   if (url === '/') responseObject.write ("<h1>This is the home Page</h1>");
   if (url === '/login') responseObject.write ("<h1>Welcome back, login now</h1>");
   if (url === '/signup') responseObject.write ("<h1>Join us now, signup</h1>");
   if (url !== '/' && url !== '/login' && url !== '/signup') responseObject.write ("<h1>Page not found</h1>");
 

  responseObject.end("");
}
const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=>{console.log("Request received, wait for response")});