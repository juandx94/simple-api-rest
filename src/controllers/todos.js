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
    throw Error('Something happend');
  }

}

export const getOne = async (req, res, next) => {
  res.status(200).json({
    message: 'todos routes'
  })
}

export const updateOne = async (req, res, next) => {
  res.status(200).json({
    message: 'todos routes'
  })
}

export const deleteOne = async (req, res, next) => {
  res.status(200).json({
    message: 'todos routes'
  })
}

export const create = async (req, res, next) => {
  res.status(200).json({
    message: 'todos routes'
  })
}