const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////
module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    if (req.url === '/') {
      var message = messages.dequeue()
      res.writeHead(200, headers);
      res.end(message);
    }
    if (req.url === '/background.jpg') {
      console.log('inside the background request');
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          console.log(err, 'inside the error case');
          res.writeHead(404);
        } else {
          res.writeHead(200, {'Content-Type': 'image/jpg'});
          console.log(data);
          res.write(data);
        }
        res.end();
        next();
      })
    } 
  }
  
  
};

//server
// var commands = ['left', 'right', 'up', 'down'];
// var getCommands = function () {
//   return commands[Math.floor(Math.random() * 4)]
// }