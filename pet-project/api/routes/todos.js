var express = require('express');
var router = express.Router();
const todoModel = require('../models/todo');

router.get('/', (req, res) => {
      todoModel.find({})
            .then(todos => {
                  res.json(todos)
            }).catch(err => {
                  console.log(err)
                  res.status(500).json({
                        message: "Cannot get todos"
                  });
                  throw err;
            });
});

router.post('/', (req, res) => {
      todoModel.create(req.body)
            .then(createdTodo => {
                  res.json(createdTodo)
            }).catch(err => {
                  console.log(err);
                  res.status(500).json({
                        message: "Cannot post todos"
                  });
            });
});

router.put('/:id', (req, res) => {
      todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, foundTodo) => {
            if (err) {
                  throw err;
            }
            res.json(foundTodo);
      }).catch(err => {
            console.log(err);
            res.status(500).json({
                  message: "Cannot put todos"
            });
      });
});

router.delete('/:id', async (req, res) => {
      todoModel.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
            if (err) {
                  throw err;
            }
            res.json({
                  message: "Todo deleted",
                  id: deletedTodo._id
            });
      }).catch(err => {
            console.log(err);
            res.status(500).json({
                  message: "Cannot delete todos"
            });
      });
});

module.exports = router;