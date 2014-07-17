/*
 * Author: Maverick Chan
 * Project: Live Line
 */

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use( favicon() );
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded() );
app.use( cookieParser() );
app.use( express.static( path.join(__dirname, 'static') ) );

/// Routes
var routes = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');

app.use('/', routes);
app.use('/', auth);
app.use('/users', users);

/// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// Error handlers

// Development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.locals.pretty = true;
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production error handler
// No stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

