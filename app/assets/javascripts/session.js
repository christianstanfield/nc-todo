function sessionCreate(url, user) {

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
    url: event.srcElement.href,
    type: event.srcElement.dataset.method,
    success: function(response) {
      endSessionAPI(response);
    }
  });
}

function endSessionAPI(user) {

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/sign_out',
    data: '{"api_token": "' + user.api_token + '", "user_id": ' + user.id + '}',
    type: 'DELETE',
    contentType: 'application/json',
    success: function(response) {
      redirectRoot();
    }
  });
}

function redirectRoot() {
  $.get('/', function(response) {
    $('body').html(response);
  });
}
