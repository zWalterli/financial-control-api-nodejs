const express = require('express');
const { create, get } = require('../controllers/todoController');
const { createValidator } = require('../validators/todo/createValidation');
const router = express.Router();

router.get('/', get);

router.post('/', createValidator, create);

module.exports = router;