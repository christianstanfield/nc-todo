$(document).ready(function() {

$('#login_button').on('click', function(e) {
  e.preventDefault(); // needs default functionality
  $('#login_button').toggleClass('clicked');
  $('#signup_button').removeClass('clicked');
  $('#login_menu').toggle();
  $('#signup_menu').hide();
});

$('#login_menu form').on('submit', function(e) {
  e.preventDefault(); // needs default functionality

  var url = $(this).attr('action');
  var data = $(this).serialize(); // fix this section later
  var data_array = data.split('&');
  var email = data_array[2].replace('user%5Bemail%5D=','');
  email = email.replace('%40','@');
  var password = data_array[3].replace('user%5Bpassword%5D=','');

$.ajax({
  url: 'http://recruiting-api.nextcapital.com/users/sign_in',
  data: '{"email": "' + email + '", "password": "' + password + '"}',
  type: 'POST',
  contentType: 'application/json',
  success: function(response){
    $('#login_menu').toggle();
    $('#login_button').toggleClass('clicked');
    $.post(url, response, function(response) {
      $('body').html(response);
    });
  },
  error: function(response){
    var resp_error = response.responseJSON.error + '<br><br>';
    $('#login_menu form').prepend(resp_error);
  }
});

});

});
