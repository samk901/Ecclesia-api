/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
}, {
  collection: 'todo',
});

module.exports = mongoose.model('Todo', todoSchema);
