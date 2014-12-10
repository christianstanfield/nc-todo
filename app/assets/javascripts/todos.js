function submitNewTodo(form) {

  // parse user input
  var data = $(form).serialize();
  var description = data.replace('description=','');
  description = description.split('+').join(" ");
  // send to api
  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + getCookie('user_id') + '/todos',
    data: '{ "api_token": "' + getCookie('user_api_token') + '", "todo": {"description": "' + description + '"}}',
    type: 'POST',
    contentType: 'application/json',
    success: function(todo) {
      // add to list
      toggleCreateTodoNav();
      addTodoToList(todo);
    }
  });
}

function submitUpdateTodo(form) {

  // parse user input
  var data = $(form).serialize();
  var description = data.replace('description=','');
  description = description.split('+').join(" ");
  var todo_id = $(form).parent().find('input[type=checkbox]').attr("id");
  // send to api
  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + getCookie('user_id') + '/todos/' + todo_id,
    data: '{ "api_token": "' + getCookie('user_api_token') + '", "todo": {"description": "' + description + '"}}',
    type: 'PUT',
    contentType: 'application/json',
    success: function(response) {
      // add to list
      $(form).parent().find('.todo_text').text(description);
      $(form).parent().find('.edit_task_link').removeClass('inactiveLink');
      $(form).hide();
    }
  });
}

function deleteTodo(todo) {

  var todoID = todo.id;
  // send to api
  $.ajax({
    url: 'http://recruiting-api.nextcapital.com/users/' + getCookie('user_id') + '/todos/' + todoID,
    data: '{"api_token":"' + getCookie('user_api_token') + '", "todo": {"is_complete": true}}',
    type: 'PUT',
    contentType: 'application/json',
    success: function(response) {
      // remove from list
      $(todo).parent().fadeOut();
    }
  });
}

function toggleCreateTodoNav() {
  $('#create_task_menu').find('input[type=text]').val("");
  $('#create_task_menu').toggle();
}

function toggleEditTodoNav(link) {

  var value = $(link).parent().text();
  $(link).toggleClass('inactiveLink');
  $(link).parent().append(
    '<form class="edit_todo">' +
    '<li><input name="description" placeholder="Description" type="text" value="' + value + '"></li>' +
    '<li><input name="commit" type="submit" value="Update Todo"></li></form>');
}

function renderTodos() {

  renderCreateTaskMenu(); // build form to create todos
  renderTodoList(); // build list of todos
}

function renderCreateTaskMenu() {
  // render button
  $('body').prepend('<a href="#" id="create_task_link">Create a Task</a>');
  // render menu
  $('#create_task_menu').append(
    '<form class="new_todo">' +
    '<li><input name="description" placeholder="Description" type="text"></li>' +
    '<li><input name="commit" type="submit" value="Create Todo"></li></form>');
}

function renderTodoList() {

  // Get todo list from api
  $.get('http://recruiting-api.nextcapital.com/users/' + getCookie('user_id') + '/todos.json?api_token=' + getCookie('user_api_token'), function (todos) {
    // add incomplete todos to list
    for (var i = 0; i < todos.length; i++) {
      if (todos[i]["is_complete"] === false) addTodoToList(todos[i]);
    }
  });
}

function addTodoToList(todo) {
  $('#todo_list').prepend(
    '<li><input type="checkbox" id="' + todo["id"] + '">' +
    '<a class="fa fa-pencil edit_task_link" href="#"></a>' +
    '<span class="todo_text">' + todo["description"] + '</span></li>');
}

function getCookie(name) {

  name += "=";
  var cookieArray = document.cookie.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
    var c = cookieArray[i];
    while (c.charAt(0) == ' ') c = c.substring(1,c.length);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return null;
}

function deleteCookie(name) {
  // Delete a cookie by setting the date of expiry to yesterday
  date = new Date();
  date.setDate(date.getDate() -1);
  document.cookie = escape(name) + '=;expires=' + date;
}
