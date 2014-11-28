$(document).ready(function() {

  $('#signup_button').on('click', function(e) {
    e.preventDefault(); // needs default functionality
    $('#signup_button').toggleClass('clicked');
    $('#signup_menu').toggle();
  });
  
});
