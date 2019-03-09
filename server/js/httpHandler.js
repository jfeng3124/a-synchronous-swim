const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  
  var commands = ['left', 'right', 'up', 'down'];
  var getCommands = function () {
    return commands[Math.floor(Math.random() * 3)]
  }
  
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(getCommands());
    res.end();
  } else {
    res.writeHead(200, headers);
    res.end();
  }


};

//server