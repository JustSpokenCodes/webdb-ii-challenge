const express = require('express');

const PostRouter = require('./cars/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', PostRouter);

server.get('/', (req,res) => {
    res.send('<h2> DB Help me with these cars...oh, and Knex<h2>');
});

module.exports = server;