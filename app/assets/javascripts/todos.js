function submitTodosForm(form) {

  var data = $(form).serialize();
  var data_array = data.split('&');
  var description = data_array[2].replace('todo%5Bdescription%5D=','');

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos',
    data: '{ "api_token": "' + gon.api_token + '", "todo": {"description": "' + description + '"}}',
    type: 'POST',
    contentType: 'application/json'
  });
}

function getTodosIndex(form) {

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos.json?api_token=' + gon.api_token,
    type: 'GET',
    contentType: 'application/json',
    success: function(response) {
      var url = $(form).attr('action');

      for (var i = 0; i < response.length; i++) {
        if (response[i].is_complete === false) {
        $.post(url, { todo: JSON.stringify(response[i]) });
        }
      }

      $.get(url, function(response) {
        $('body').html(response);
      })
    }
  });
}
