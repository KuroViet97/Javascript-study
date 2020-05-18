//connect mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
//set mongoose's Promise to use Node's Promise
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');