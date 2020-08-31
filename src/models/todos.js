import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String
  },

  description: {
    type: String
  },

  completed: {
    type: Boolean, 
    default: false
  },

},{
  timestamps: true
});

const model = mongoose.model('Todos', schema);
export default model;