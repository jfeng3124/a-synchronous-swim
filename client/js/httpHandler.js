(function() {
  const serverUrl = 'http://127.0.0.1:3000';

  setInterval(function() {
    $.ajax({
      url: serverUrl,
      method: 'GET',
      success: function (data) {
        console.log('success', data)
        SwimTeam.move(data.toString())
      },
      error: function () {
        console.log(data, 'Failed GET request')
      }
    })}, 3000)
})();

//client