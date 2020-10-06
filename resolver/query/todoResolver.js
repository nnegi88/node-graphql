const Todo = require("../../model/repository/Todo");
const TodoResponse = require("./todoResponse");

class TodoResolver {
  async todos() {
    try {
      const todos = await Todo.find().exec();
      return todos.map((todo) => {
        return new TodoResponse(todo);
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async todo({ id }) {
    try {
      const todo = await Todo.findById(id).exec();
      return new TodoResponse(todo);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TodoResolver;
