$(document).ready(function() {

// Nav buttons //
$('#login_button').on('click', function() {
  toggleNav(this);
});

$('#signup_button').on('click', function() {
  toggleNav(this);
});

// Login / Signup Forms //
$('#login_menu form').on('submit', function(e) {
  e.preventDefault();
  submitMenu(this);
});

$('#signup_menu form').on('submit', function(e) {
  e.preventDefault();
  submitMenu(this);
});

$('body').on('click', '#logout_button', function(e) {
  e.stopImmediatePropagation();
  endSession();
});

// Todo CRUD //
$('body').on('submit', '.edit_todo', function(e) {
  e.preventDefault();
  submitUpdateTodo(this);
});

$('.new_todo').on('submit', function(e) {
  e.preventDefault();
  submitNewTodo(this);
});

$('body').on('click', 'input[type=checkbox]', function() {
  deleteTodo(this);
});

// Todo Nav //
$('#create_task_link').on('click', function() {
  toggleCreateTodoNav();
});

$('body').on('click', '.edit_task_link', function(e) {
  e.stopImmediatePropagation();
  toggleEditTodoNav(this);
});

$('#todo_list').sortable();

});
