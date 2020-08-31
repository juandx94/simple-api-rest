import Todos from '../models/todos.js';


export default class TodoService {
  
  async getTodos() {
    const todos = await Todos
      .find({})
      .select('-__v')
      
    return todos
  }
}