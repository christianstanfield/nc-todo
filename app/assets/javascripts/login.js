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
  // parse rails form data
  var data_array = data.split('&');
  var email = data_array[0].replace('email=','');
  email = email.replace('%40','@');
  var password = data_array[1].replace('password=','');

  var ncUrl;
  var menuForm;
  if (url === '/sessions') {
    ncUrl = '/users/sign_in';
    menuForm = '#login';
  }
  if (url === '/users') {
    ncUrl = '/users';
    menuForm = '#signup';
  }

  // establish session with api
  $.ajax({
    url: 'http://recruiting-api.nextcapital.com' + ncUrl,
    data: '{"email": "' + email + '", "password": "' + password + '"}',
    type: 'POST',
    contentType: 'application/json',

    success: function(user) {
      $(menuForm + '_menu').toggle();
      $(menuForm + '_button').toggleClass('clicked');

      // save user params in cookie
      document.cookie = "user_id=" + user.id;
      document.cookie = "user_email=" + user.email;
      document.cookie = "user_api_token=" + user.api_token;
      // get todos index page
      renderTodosPage();
    },

    error: function(response) {
      var resp_error;
      if (url === '/sessions') {
        resp_error = response.responseJSON.error + '<br><br>';
      $('#login_error').html(resp_error);
      }
      if (url === '/users') {
        resp_error = 'Email ' + response.responseJSON.email + '<br><br>';
        $('#signup_error').html(resp_error);
      }
    }
  });
}

function renderTodosPage() {
  $.get('/todos', function (response) {
    $('body').html(response);
    renderNavBar(getCookie('user_api_token'));
    renderTodos();
  });
}
