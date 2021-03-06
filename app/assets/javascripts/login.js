function toggleNav(menu) {
  var clicked;
  var unclicked;

  if (menu.id === 'login_button') {
    clicked = '#login';
    unclicked = '#signup';
  }
  if (menu.id === 'signup_button') {
    clicked = '#signup';
    unclicked = '#login';
  }

  $(clicked + '_button').toggleClass('clicked');
  $(unclicked + '_button').removeClass('clicked');
  $(clicked + '_menu').toggle();
  $(unclicked + '_menu').hide();
}

function submitMenu(menu) {
  var url = $(menu).attr('action');
  var data = $(menu).serialize();

  var data_array = data.split('&');
  var clicked;
  var ncUrl;
  var menuForm;
  if (url === '/sessions') {
    clicked = 'session';
    ncUrl = '/users/sign_in';
    menuForm = '#login';
  }
  if (url === '/users') {
    clicked = 'user';
    ncUrl = '/users';
    menuForm = '#signup';
  }

  var email = data_array[2].replace(clicked + '%5Bemail%5D=','');
  email = email.replace('%40','@');
  var password = data_array[3].replace(clicked + '%5Bpassword%5D=','');

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com' + ncUrl,
    data: '{"email": "' + email + '", "password": "' + password + '"}',
    type: 'POST',
    contentType: 'application/json',

    success: function(response) {
      $(menuForm + '_menu').toggle();
      $(menuForm + '_button').toggleClass('clicked');

      var user = new User(response);

      $.get('http://recruiting-api.nextcapital.com/users/' + user.id + '/todos.json?api_token=' + user.api_token, function (response) {
      user.getTodos(response);
      createSession(url, user);
      })
    },

    error: function(response) {
      if (url === '/sessions') {
      var resp_error = response.responseJSON.error + '<br><br>';
      $('#login_error').html(resp_error);
      }
      if (url === '/users') {
        var resp_error = 'Email ' + response.responseJSON.email + '<br><br>';
        $('#signup_error').html(resp_error);
      }
    }
  });
}
