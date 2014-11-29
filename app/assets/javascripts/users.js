$(document).ready(function() {

$('#signup_button').on('click', function(e) {
  e.preventDefault(); // needs default functionality
  $('#signup_button').toggleClass('clicked');
  $('#login_button').removeClass('clicked');
  $('#signup_menu').toggle();
  $('#login_menu').hide();
});

$('#signup_menu form').on('submit', function(e) {
  e.preventDefault(); // needs default functionality

  var url = $(this).attr('action');
  var data = $(this).serialize(); // fix this section later
  var data_array = data.split('&');
  var email = data_array[2].replace('user%5Bemail%5D=','');
  email = email.replace('%40','@');
  var password = data_array[3].replace('user%5Bpassword%5D=','');

$.ajax({
  url: 'http://recruiting-api.nextcapital.com/users',
  data: '{"email": "' + email + '", "password": "' + password + '"}',
  type: 'POST',
  contentType: 'application/json',
  success: function(response){
    $('#signup_menu').toggle();
    $('#signup_button').toggleClass('clicked');
    $.post(url, response, function(response) {
      $('body').html(response);
    });
  },
  error: function(response){
    var resp_error = 'Email ' + response.responseJSON.email + '<br><br>';
    $('#signup_menu form').prepend(resp_error);
  }
});

});

});
