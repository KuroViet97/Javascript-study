const express = require('express');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

// user model
const userModel = require('../models/user');

const handleInternalError = require('../shared/handle-errors');

router.post('/', (req, res) => {
      const { email, password } = req.body;

      // simple validation
      if (!email || !password) {
            return res.status(400).json({
                  message: "Please enter all fields",
            });
      }

      // check for duplicated user
      userModel.findOne({ email }).then((user) => {
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

module.exports = router;
