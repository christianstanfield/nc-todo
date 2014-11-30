$(document).ready(function() {

var user = new User();

$('#login_button').on('click', function(e) {
  e.preventDefault();
  toggleNav(this);
});

$('#signup_button').on('click', function(e) {
  e.preventDefault();
  toggleNav(this);
});

$('#login_menu form').on('submit', function(e) {
  e.preventDefault();
  submitMenu(this, user);
});

$('#signup_menu form').on('submit', function(e) {
  e.preventDefault();
  submitMenu(this, user);
});

});
