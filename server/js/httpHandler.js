const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  
  var commands = ['left', 'right', 'up', 'down'];
  var getCommands = function () {
    return commands[Math.floor(Math.random() * 4)]
  }
  
  if (req.method === 'GET' && req.url === '/') {
    var message = messages.dequeue()
    res.writeHead(200, headers);
    res.end(message);
  } else {
    res.writeHead(200, headers);
    res.end();
  }


};

//server