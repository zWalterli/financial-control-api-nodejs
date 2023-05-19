const express = require("express");
const app = express();
const todoRoutes = require('./router/todoRoutes');

app.use(express.json());

app.use('/api/todo', todoRoutes)

module.exports = app;