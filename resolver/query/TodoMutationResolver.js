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

  async deleteTodo({ id }) {
    const todoToDelete = await Todo.findById(mongoose.Types.ObjectId(id));
    if (!todoToDelete) {
      throw new Error("Not Found");
    }
    const deleteResponse = await Todo.deleteOne({ _id: id });
    if (deleteResponse.deletedCount > 0) {
      return new TodoResponse(todoToDelete);
    } else {
      throw new Error("Unable to delete");
    }
  }
}

module.exports = TodoMutationResolver;
