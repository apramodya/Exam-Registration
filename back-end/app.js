let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let passport = require('passport');
let mongoose = require('mongoose');
let config = require('./config/database');

// mongo db using mlab
mongoose.connect(config.database);
mongoose.connection.on('connected', function () {
    console.log('db connected through mlab.com');
});

const app = express();

// CORS middleware
app.use(cors());

// passport middleware
// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport')(passport);

//index route
app.get('/', function (req, res) {
    res.send('Hello');
});

// start server
app.listen(3000, function () {
    console.log('Started on port 3000');
});
