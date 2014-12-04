function submitNewTodo(form) {

  var url = $(form).attr('action');
  var data = $(form).serialize();
  var data_array = data.split('&');
  var description = data_array[2].replace('todo%5Bdescription%5D=','');
  description = description.split('+').join(" ");

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos',
    data: '{ "api_token": "' + gon.api_token + '", "todo": {"description": "' + description + '"}}',
    type: 'POST',
    contentType: 'application/json',
    success: function(response) {

      $.ajax({
        url: url,
        type: 'POST',
        data: { todo: JSON.stringify(response) },
        success: function(response) {
          $('body').html(response);
        }
      });
    }
  });
}

function submitUpdateTodo(form) {
  var url = $(form).attr('action');
  var todo_id = url.replace('/users/' + gon.user_id + '/todos/', '');
  var data = $(form).serialize();
  var data_array = data.split('&');
  var description = data_array[3].replace('todo%5Bdescription%5D=','');
  description = description.split('+').join(" ");

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos/' + todo_id,
    data: '{ "api_token": "' + gon.api_token + '", "todo": {"description": "' + description + '"}}',
    type: 'PUT',
    contentType: 'application/json',
    success: function(response) {

      $.ajax({
        url: url,
        type: 'POST',
        data: { _method: 'patch', todo: JSON.stringify(response) },
        success: function(response) {
          $('body').html(response);
        }
      });
    }
  });
}

function deleteTodo(todoID) {

  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + gon.user_id + '/todos/' + todoID,
    data: '{"api_token":"' + gon.api_token + '", "todo": {"is_complete": true}}',
    type: 'PUT',
    contentType: 'application/json',
    success: function(response) {

      $.ajax({
        url: '/users/' + gon.user_id + '/todos/' + todoID,
        type: 'POST',
        data: { _method: 'delete' },
        success: function(response) {
          // console.log("Success!");
        }
      });
    }
  });
}

function toggleCreateTodoNav() {
  $('#create_task_menu').toggle();
}

function toggleEditTodoNav(link) {
  $.get(link.href, function (response) {
    $(link).toggleClass('inactiveLink');
    response = $(response).not('nav');
    $(link).parent().append(response);
  })
}
