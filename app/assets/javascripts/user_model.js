function User(params) {
  this.id = params.id;
  this.email = params.email;
  this.api_token = params.api_token;
  this.todos = [];
}

User.prototype.getTodos = function (API_todos) {
  for (var i = 0; i < API_todos.length; i++) {
    if (API_todos[i]["is_complete"] === false) {
      this.todos.push(API_todos[i]);
    }
  }
};
