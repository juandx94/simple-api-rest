import Todos from '../models/todos.js';


export default class TodoService {
  
  async getTodos() {
    const todos = await Todos
      .find({})
      .select('-__v')

    return todos
  }

  async getTodoById(id) {

    const todo = await Todos
    .findById(id)
    .select('-__v');

    return todo
  }

  async createTodo(todo) {
    const newTodo = await Todos.create({
      title: todo.title,
      description: todo.description
    })

    return newTodo;
  }

  async deleteTodo(id,) {
    const todo = await Todos.deleteOne({_id: id});
    return todo;
  }

  async updateTodo(id, _completed) {
    const todo = await Todos.updateOne({_id: id}, {completed: _completed});
    return todo;
  }
}