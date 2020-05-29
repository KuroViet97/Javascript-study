var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
const corsOptions = {
  exposedHeaders: 'x-auth-token'
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// core middleware
app.use(cors(corsOptions));


//connect mongodb
const mongoose = require('mongoose');
const config = require('config');

//get config from ../config/default
const db = config.get('mongoURI');

mongoose.connect(db, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.set('debug', true);
//set mongoose's Promise to use Node's Promise
mongoose.Promise = Promise;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));
app.use('/auth', require('./routes/auth'));

app.use(express.json());

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || 'error processing request'
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
