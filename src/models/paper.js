const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  "symbol": {
    type: "String",
    required: [true, 'field "symbol" is required']
  },
  "amount": {
    type: "Number",
    required: [true, 'field "Amount" is required']
  },
  "gainPerPortion": {
    type: "Number",
    required: [true, 'field "gainPerPortion" is required']
  },
  "releaseDate": {
    type: "Date",
    required: [true, 'field "releaseDate" is required']
  },
  "createdAt": {
    type: "Date",
    required: [true, 'field "createdAt" is required']
  },
  "deletedAt": {
    type: "Date",
  },
});

const paper = mongoose.model('paper', paperSchema);

module.exports = paper;