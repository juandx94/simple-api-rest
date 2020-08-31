import express from 'express';

//import routes
import todos from './todos.js';

const root = express.Router();
root.use('/todos',todos)

export default root;