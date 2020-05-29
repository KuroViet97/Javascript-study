const express = require('express');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// custom middleware
const auth = require('../middleware/auth');

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

/**
 * Check for current user since JWT is stateless. User is not stored anywher,
 * but only token is received and response is returned back. The following api
 * is used to retrieve the user with JWT token
 */
router.get('/user', auth, (req, res) => {
      userModel.findById(req.user.id)
            .select('-password')
            .then(user => {
                  res.json(user);
            }).catch(err => {
                  console.log(err);
                  res.status(500).json({ mesage: 'Internal error - cannot get user' });
            });
});

module.exports = router;
