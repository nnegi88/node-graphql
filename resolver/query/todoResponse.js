class TodoResponse {
  constructor(todoEntity) {
    this.todoEntity = todoEntity;
  }

  id() {
    try {
      return this.todoEntity._id;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  title() {
    try {
      return this.todoEntity.title;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  completed() {
    try {
      return this.todoEntity.completed;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TodoResponse;
