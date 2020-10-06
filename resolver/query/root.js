const TodoResolver = require("./todoResolver");
const TodoMutationResolver = require("./TodoMutationResolver");

const root = {
  todoQuery: new TodoResolver(),
  todoMutation: new TodoMutationResolver(),
};

module.exports = { rootResolver: root };
