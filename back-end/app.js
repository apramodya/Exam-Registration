let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let passport = require('passport');
let mongoose = require('mongoose');
let config = require('./config/database');
const users = require('./routes/users');
const courses = require('./routes/courses');
const status = require('./routes/status');
const modules = require('./routes/modules');
// mongo db using mlab
mongoose.connect(config.database);
mongoose.connection.on('connected', function () {
    console.log('db connected through mlab.com');
});

const app = express();

// CORS middleware
app.use(cors());

// body parse
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/users', users);
app.use('/courses', courses);
app.use('/modules', modules);
app.use('/status', status);

//index route
app.get('/', function (req, res) {
    res.send('Hello');
});

// start server
app.listen(3000, function () {
    console.log('Started on port 3000');
});
