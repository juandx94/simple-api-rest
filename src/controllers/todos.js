import TodoService from '../services/Todos.js'
//controllers for todos routes
export const getAll = async (req, res, next) => {

  try {
    const todos = await TodoService.prototype.getTodos();

    res.status(200).json({
      status: 'OK',
      message: 'Fetched Successfully...',
      data: todos,
      count: todos.length
    })
  } catch (err) {
    next(Error('Something happend'))
  }

}

export const getOne = async (req, res, next) => {

  try {
    const _id = req.params.id;

    const todo = await TodoService.prototype.getTodoById(_id);

    if(!todo) {
      return res.status(404).json({
        status: 'NOT FOUND ',
        message: 'Todo not found...',
      })
    }

    res.status(200).json({
      status: 'OK',
      message: 'Fetched Successfully...',
      data: todo,
    })
  } catch (err) {

    if(err.name === 'CastError'){
      const status = 401;
      const error = new Error(err.message);
      error.status = status;
      next(error)
    }

    next(err);
  }

}

export const updateOne = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const completed = req.body.completed

    const todo = await TodoService.prototype.updateTodo(_id, completed)

    if(todo.n === 0) {
      return res.status(404).json({
        status: 'NOT FOUND ',
        message: 'Todo not found...',
      })
    }
    res.status(200).json({
      status: 'OK',
      message: 'Todo succesfully updated ...',
    })
  } catch (err) {
    next(err);
  }
}

export const deleteOne = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const todo = await TodoService.prototype.deleteTodo(_id)

    if(todo.n === 0) {
      return res.status(404).json({
        status: 'NOT FOUND ',
        message: 'Todo not found...',
      })
    }
    res.status(200).json({
      status: 'OK',
      message: 'Todo succesfully deleted ...',
    })
  } catch (err) {
    next(err);
  }
}

export const create = async (req, res, next) => {

 try {
  const title = req.body.title;
  const description = req.body.description;

  const newTodo = await TodoService.prototype.createTodo({title, description});

  res.status(201).json({
    status: 'CREATED',
    message: 'Todo successfully created...',
    data: {
      _id: newTodo._id,
      title: newTodo.title,
      description: newTodo.description,
      completed: newTodo.completed,
      createdAt: newTodo.createdAt,
      updatedAt: newTodo.updatedAt,
    }
  })

 } catch (err) {
   next(err)
 }
}