function submitTodosForm(form) {

  var url = $(form).attr('action');
  var data = $(form).serialize();

  console.log(url);
  console.log(data);

  var data_array = data.split('&');
  var description = data_array[2].replace('todo%5Bdescription%5D=','');

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos',
    data: '{ "api_token": "' + gon.api_token + '", "todo": {"description": "' + description + '"}}',
    type: 'POST',
    contentType: 'application/json',
    success: function(response) {
      console.log(response);
    }
  });

}
