import express from 'express';

import { getAll, getOne, create, deleteOne, updateOne } from '../controllers/todos.js';
const todos = express.Router();

todos.get('/', getAll)
todos.get('/:id', getOne)
todos.post('/', create)
todos.delete('/:id', deleteOne)
todos.put('/:id', updateOne)

export default todos;