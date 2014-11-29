$(document).ready(function() {

$('#signup_button').on('click', function(e) {
  e.preventDefault(); // needs default functionality
  $('#signup_button').toggleClass('clicked');
  $('#signup_menu').toggle();
});

$('#signup_menu form').on('submit', function(e) {
  e.preventDefault(); // needs default functionality
  $('#signup_menu').toggle();
  $('#signup_button').toggleClass('clicked');

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

    $.post(url, response);

    console.log('success!');
    console.log(response);
  },
  error: function(response){
    console.log('error');
    console.log(response);
  }
});

});

});
