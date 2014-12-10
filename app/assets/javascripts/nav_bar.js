function renderNavBar(token) {

  if (token === getCookie('user_api_token')) {

    $('nav ul').append(
      '<li id="welcome_nav">Welcome ' + getCookie('user_email') + '</li>' +
    '<li><a href="#" id="logout_button">Logout</a></li>');

  } else {

    $('nav ul').append(
      '<li><a href="#" id="login_button">Login</a>' +
      '<ul id="login_menu">' +
      '<li id="login_error"></li>' +
      '<form action="/sessions">' +
      '<li><input name="email" placeholder="Email" size="14" type="text"></li>' +
      '<li><input name="password" placeholder="Password" size="14" type="password"></li>' +
      '<li><input id="login_submit" type="submit" value="Login"></li></form></ul></li>' +
      '<li><a href="#" id="signup_button">Signup</a>' +
      '<ul id="signup_menu">' +
      '<li id="signup_error"></li>' +
      '<form action="/users">' +
      '<li><input name="email" placeholder="Email" size="14" type="text"></li>' +
      '<li><input name="password" placeholder="Password" size="14" type="password"></li>' + 
      '<li><input id="signup_submit" type="submit" value="Signup"></li></form></ul></li>');
  }
}
