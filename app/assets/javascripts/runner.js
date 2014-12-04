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

$('#logout_button').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  endSession(event.originalEvent);
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

});
