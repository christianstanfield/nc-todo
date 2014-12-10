// function createSession(url, user) {
//
//   $.ajax({
//     url: url,
//     type: 'POST',
//     data: { user: JSON.stringify(user) },
//     success: function(response) {
//       $('body').html(response);
//     }
//   });
// }

function endSession() {

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/sign_out',
    data: '{"api_token": "' + getCookie('user_api_token') + '", "user_id": ' + getCookie('user_id') + '}',
    type: 'DELETE',
    contentType: 'application/json',
    success: function() {
      // debugging
      console.log("success");
      //
      deleteCookie('user_api_token');
      $.get('/', function (response) {
        $('body').html(response);
      });
    },
    error: function (response) {
      // debugging
      console.log("error");
      console.log(getCookie('user_id'));
      console.log(getCookie('user_api_token'));
      console.log(response);
    }
  });
}
