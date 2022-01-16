// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});

//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

// const http=require('http')
// const server=http.createServer((req,res)=>{res.end('I love you .....Priya')});
// server.listen(8100,"127.0.0.1",()=>{console.log('created')});

// const { copyFileSync } = require("fs");

// const { write } = require("fs");
// const http = require("http");
// const { url } = require("inspector");
// const { writeHeapSnapshot } = require("v8");
// const server = http.createServer((req, res) => {
//   if (req.url == "/love") {
//     res.end("priya");
//   } else if (req.url == "/tp") {
//     res.end("ranjana");
//   } else {
//     res.end("love you");
//   }
// });
// server.listen(8001, "127.0.0.1", () => {
//   console.log("created");
// });
