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
    })}, 1000)
  
  // var getBackground = function () {
  //   $.ajax({
  //     url: serverUrl + '/background.jpg',
  //     method: 'GET',
  //     // success: function () {
  //     //   window.location = window.location.href
  //     // },
  //     // error: function () {
  //     //   console.log('Failed getting background')
  //     // }
  //   })
  // }
  // getBackground()
  
})();

//client