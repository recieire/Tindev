const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.azpdl.mongodb.net/tindevDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(express.json());

server.use(routes);

server.listen(3333);

