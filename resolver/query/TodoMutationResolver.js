const Todo = require("../../model/repository/Todo");
const TodoResponse = require("./todoResponse");
const mongoose = require("mongoose");

class TodoMutationResolver {
  async createTodo({ text }) {
    try {
      const id = mongoose.Types.ObjectId();
      const todo = new Todo({ _id: id, title: text, completed: false });
      const savedTodo = await todo.save();
      return new TodoResponse(savedTodo);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async updateTodo({ id, text, completed }) {
    try {
      const todoToUpdate = await Todo.findById(mongoose.Types.ObjectId(id));
      todoToUpdate.title = text;
      todoToUpdate.completed = completed;
      const savedTodo = await todoToUpdate.save();
      return new TodoResponse(savedTodo);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TodoMutationResolver;
