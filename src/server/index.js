const cors = require('cors');
const express = require('express');
const routes = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.static('uploads'));
app.use('/', routes);

module.exports = app;
