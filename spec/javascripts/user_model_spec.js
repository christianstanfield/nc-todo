describe("User model", function() {

  var params = {
    "api_token": "2FxozzbPWxzDTedCrixy",
    "email": "sample@example.org",
    "id": 123,
    "todos": []
  }

  it("has an id", function(){
    var user = new User(params);
    expect(user.id).toBe(123);
  });

  it("has an email", function(){
    var user = new User(params);
    expect(user.email).toBe("sample@example.org");
  });

  it("has an api_token", function(){
    var user = new User(params);
    expect(user.api_token).toBe("2FxozzbPWxzDTedCrixy");
  });

  it("has an array of todos", function(){
    var user = new User(params);
    expect(user.todos.length).toBe(0);
  });

});


describe("User#getTodos", function() {

  var todos = [
  {
    "description": "Description of todo item 1.",
    "id": 1,
    "is_complete": true
  },
  {
    "description": "Description of todo item 2.",
    "id": 2,
    "is_complete": false
  },
  {
    "description": "Description of todo item 3.",
    "id": 3,
    "is_complete": false
  }
  ]

  it("has the correct length", function(){
    var user = new User({"todos": []});
    user.getTodos(todos);
    expect(user.todos.length).toBe(2);
  });

  it("has the correct descriptions", function(){
    var user = new User({"todos": []});
    user.getTodos(todos);
    expect(user.todos[0].description).toBe("Description of todo item 2.");
  });

  it("has the correct ids", function(){
    var user = new User({"todos": []});
    user.getTodos(todos);
    expect(user.todos[1].id).toBe(3);
  });

});
