$(document).ready(function() {

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
  submitMenu(this);
});

$('#signup_menu form').on('submit', function(e) {
  e.preventDefault();
  submitMenu(this);
});

$('#logout_button').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation(); 
  endSession(event.originalEvent);
});

});
