'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

configureExpress();
configure404Error();
configureErrorHandler();

function configureExpress() {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(getFrontendPath()));
}

function getFrontendPath() {
  return path.join(getWebPath(), 'frontend');
}

function getWebPath() {
  return __dirname.substring(0, __dirname.lastIndexOf('backend/express'));
}

function configure404Error() {
  app.use(function (req, res, next) {
    var err = new Error('.love> not found.');
    err.status = 404;
    next(err);
  });
}

function configureErrorHandler() {
  app.use(function(err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('.love> error.');
  });
}

module.exports = app;
