function createSession(url, user) {

  $.ajax({
    url: url,
    type: 'POST',
    data: { user: JSON.stringify(user) },
    success: function(response) {
      $('body').html(response);
    }
  });
}

function endSession(event) {

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/sign_out',
    data: '{"api_token": "' + gon.api_token + '", "user_id": ' + gon.user_id + '}',
    type: 'DELETE',
    contentType: 'application/json',
    success: function(response) {

      $.ajax({
        url: event.srcElement.href,
        type: 'POST',
        data: { _method: 'delete' },
        success: function(response) {
          $('body').html(response);
        }
      });
    }
  });
}
