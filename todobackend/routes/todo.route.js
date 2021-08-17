/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const todoSchema = require('../models/Todo.js');


/* Creates Todos */
router.route('/create-todo').post((req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

/* Reads Todos */
router.route('/todo-list').get((req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

/* Update Student */
router.route('/update-todo/:id').delete((req, res, next) => {
  todoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
