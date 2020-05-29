const express = require('express');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

const handleInternalError = require('../shared/handle-errors');

// user model
const userModel = require('../models/user');
const userTodoModel = require('../models/userTodo');

router.post('/', (req, res) => {
      const { name, email, password } = req.body;

      // simple validation
      if (!name || !email || !password) {
            return res.status(400).json({
                  message: "Please enter all fields",
            });
      }

      // check for duplicated user
      userModel.findOne({ email }).then((duplicatedUser) => {
            if (duplicatedUser) {
                  return res.status(400).json({
                        message: "User already existed. Please create an account with another email",
                  });
            }

            const newUser = new userModel({
                  name,
                  email,
                  password,
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
                                                },
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

router.post('/test', (req, res) => {
      const { name, email, password } = req.body;

      // simple validation
      if (!name || !email || !password) {
            return res.status(400).json({
                  message: "Please enter all fields",
            });
      }

      // check for duplicated user
      userModel.findOne({ email }).then((duplicatedUser) => {
            if (duplicatedUser) {
                  return res.status(400).json({
                        message: "User already existed. Please create an account with another email",
                  });
            }

            const newUser = new userTodoModel({
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
module.exports = router;
