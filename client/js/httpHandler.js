(function() {
  const serverUrl = 'http://127.0.0.1:3000';
  //rest JSON object
  //using GET
  //url = serverURL
  //data
  var getMessage = function (callback) {
    $.ajax({
      url: serverUrl,
      type: GET,
      callback(message)
    })
  }

  var test = function(message) {
    console.log('message', message)
  }

  getMessage(test);



})();

//client