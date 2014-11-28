$(document).ready(function() {

$('#login_button').on('click', function(e) {
  e.preventDefault(); // needs default functionality
  $('#login_button').toggleClass('clicked');
  $('#login_menu').toggle();
});

});
