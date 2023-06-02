const express = require("express");
const app = express();
const investmentRoutes = require('./router/investmentRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Routes
app.use('/api/investment', investmentRoutes);

// Connect to MongoDb
mongoose.connect('mongodb+srv://admin:admin@investment-db.s7aizgb.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('connected', () => console.log('Connected to Database!'));
mongoose.connection.on('error', (err) => console.log(`Database error: ${err}`));

module.exports = app;