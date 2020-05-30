var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

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
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("MongoDB starting..."))
  .catch(err => {
    console.log(err);
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
app.use('/api/', require('./routes/user-todos'));

app.use(express.json());

console.log(filePath);
// serve static assets for production env
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client-redux/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-redux', 'build', 'index.html'));
  });
}

module.exports = app;
