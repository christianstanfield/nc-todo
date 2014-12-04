$(document).ready(function() {

// Nav buttons //
$('#login_button').on('click', function(e) {
  toggleNav(this);
});

$('#signup_button').on('click', function(e) {
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

$('#logout_button').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  endSession(e.originalEvent);
});

// Todo CRUD //
$('.edit_todo').on('submit', function(e) {
  e.preventDefault();
  submitUpdateTodo(this);
});

$('.new_todo').on('submit', function(e) {
  e.preventDefault();
  submitNewTodo(this);
});

$('input[type=checkbox]').on('click', function() {
  $(this).parent().fadeOut();
  deleteTodo(this.id);
});

// Todo Nav //
$('#create_task_link').on('click', function(e) {
  e.preventDefault();
  toggleCreateTodoNav();
});

$('.edit_task_link').on('click', function(e) {
  e.preventDefault();
  toggleEditTodoNav(this);
});

$('#todo_list').sortable();

});
