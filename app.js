const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const cors = require('cors')

const apiRoute = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app_public', 'build')));

// Allow cross origin
app.use(cors({
  origin: '*', credentials: true,
  optionSuccessStatus: 200
}))

// API Route
app.use('/api', apiRoute);

module.exports = app;