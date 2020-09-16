const express = require('express');
const router = require('./routes');
const cors = require('cors')
const app = express();

app.use(cors());
app.use('/', router)
app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../build`));

module.exports = app;