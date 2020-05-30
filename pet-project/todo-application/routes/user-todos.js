const userTodosModel = require('../models/userTodos');
const express = require('express');
const router = express.Router();
const handleInternalError = require('../shared/handle-errors');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// custom middleware
const auth = require('../middleware/auth');

// register user 
router.post('/users', (req, res) => {
      const { name, email, password } = req.body;

      // simple validation
      if (!name || !email || !password) {
            return res.status(400).json({
                  message: "Please enter all fields",
            });
      }

      // check for duplicated user
      userTodosModel.findOne({ email }).then((duplicatedUser) => {
            if (duplicatedUser) {
                  return res.status(400).json({
                        message: "User already existed. Please create an account with another email",
                  });
            }

            const newUser = new userTodosModel({
                  name,
                  email,
                  password
            });
            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                  if (err) {
                        throw err;
                  }
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                              throw err;
                        }
                        newUser.password = hash;
                        newUser.save().then((user) => {
                              jwt.sign(
                                    //payload
                                    { id: user.id },
                                    //secret
                                    config.get("jwtSecret"),
                                    //expire time 5 mins
                                    { expiresIn: 300 },
                                    (err, token) => {
                                          if (err) {
                                                throw err;
                                          }
                                          res.json({
                                                token,
                                                user: {
                                                      id: user.id,
                                                      name: user.name,
                                                      email: user.email,
                                                }
                                          });
                                    }
                              );
                        }).catch(err => {
                              handleInternalError(err, 'Internal Error - Cannot create user', res);
                        });
                  });
            });
      }).catch(err => {
            handleInternalError(err, 'Internal Error - Cannot create user', res);
      });
});

// fetch todos for a user
router.get('/user/:userid', (req, res) => {
      const { userid } = req.params;
      userTodosModel.findById(userid)
            .then(user => {
                  res.json(user.todos);
            })
            .catch(err => {
                  console.log(err);
                  res.json(res.status(400).json({ message: 'Cannot fetch todo for user: ' + userid }))
            });
});

// add todo for a user
router.post('/user/:userid/', (req, res) => {
      const { userid } = req.params;
      const todo = req.body;
      userTodosModel.findOneAndUpdate(
            { '_id': userid },
            { $push: { 'todos': todo } },
            {
                  'new': true
            },
      ).then(document => {
            const todoList = document.get('todos');
            res.json(todoList.find(ele => ele._id === todo._id));
      }).catch(err => {
            console.log(err);
            res.status(400).json({ message: 'Cannot add todo for user: ' + userid });
      })
});

// edit todo for a user
router.put('/user/:userid/', (req, res) => {
      const { userid } = req.params;
      const todo = req.body;

      userTodosModel.findOneAndUpdate(
            { '_id': userid, 'todos._id': todo._id },
            {
                  $set: {
                        'todos.$.content': todo.content,
                        'todos.$.completed': todo.completed,
                  }
            },
            { new: true }
      ).then(document => {
            const todoList = document.get('todos');
            res.json(todoList.find(ele => ele._id === todo._id));
      }).catch(err => {
            console.log(err);
            res.status(404).json('Cannot edit todo');
      });
});

// delete todo
router.delete('/user/:userid/todo/:todoid', (req, res) => {
      const { userid, todoid } = req.params;

      userTodosModel.findOneAndUpdate(
            { '_id': userid, 'todos._id': todoid },
            {
                  $pull: {
                        'todos': { _id: todoid }
                  }
            },
            { new: true }
      ).then(
            res.json({ message: "Removed todo successfully: " + todoid })
      ).catch(err => {
            console.log(err);
            res.status(404).json('Cannot remove todo');
      });
});

// authenticate
router.post('/auth', (req, res) => {
      const { email, password } = req.body;

      // simple validation
      if (!email || !password) {
            return res.status(400).json({
                  message: "Please enter all fields",
            });
      }

      // check for duplicated user
      userTodosModel.findOne({ email }).then((user) => {
            if (!user) {
                  return res.status(400).json({
                        message: "User does not exist",
                  });
            }

            //validate password
            bcrypt.compare(password, user.password)
                  .then(isMatched => {
                        if (!isMatched) {
                              return res.status(400).json({
                                    message: "Invalid credentials"
                              });
                        }

                        //if user is authenticated, send back data with jwt
                        jwt.sign(
                              //payload
                              { id: user.id },
                              //secret
                              config.get("jwtSecret"),
                              //expire time 5 mins
                              { expiresIn: 300 },
                              (err, token) => {
                                    if (err) {
                                          throw err;
                                    }
                                    res.json({
                                          token,
                                          user: {
                                                id: user.id,
                                                name: user.name,
                                                email: user.email,
                                          },
                                    });
                              }
                        );
                  }).catch(err => {
                        handleInternalError(err, 'Internal Error - Cannot authenticate user', res);
                  });;
      }).catch(err => {
            handleInternalError(err, 'Internal Error - Cannot authenticate user', res);
      });
});

/**
 * Check for current user since JWT is stateless. User is not stored anywher,
 * but only token is received and response is returned back. The following api
 * is used to retrieve the user with JWT token (load user)
 */
router.get('/auth/user', auth, (req, res) => {
      userTodosModel.findById(req.user.id)
            .select('-password')
            .select('-todos')
            .then(user => {
                  res.json(user);
            }).catch(err => {
                  console.log(err);
                  res.status(500).json({ mesage: 'Internal error - cannot get user' });
            });
});

module.exports = router;


module.exports = router;
