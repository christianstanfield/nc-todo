function User() {
  this.id = null;
}

User.prototype.initialize = function(params) {
  this.id = params.id;
  this.email = params.email;
  this.token = params.api_token;
  this.todos = params.todos;
}
