$(document).ready(function() {

$('#login_button').on('click', function(e) {
  e.preventDefault(); // needs default functionality
  $('#login_button').toggleClass('clicked');
  $('#login_menu').toggle();
});

$('#login_menu form').on('submit', function(e) {
  e.preventDefault(); // needs default functionality
  var url = 'http://recruiting-api.nextcapital.com/users/sign_in';
  var data = $(this).serialize();
  $('#login_menu').toggle();
  $('#login_button').toggleClass('clicked');

  $.post(url, data, function(response) {
    console.log(response);
  }, 'json');
});

});
