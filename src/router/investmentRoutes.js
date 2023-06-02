const express = require('express');
const { create, get, update, remove, setGainPerTicket } = require('../controllers/investmentController');
const investment = require('../validators/investment');
const router = express.Router();

router.get('/', get);
router.get('/:id', get);
router.post('/', investment.create, create);
router.put('/', investment.update, update);
router.delete('/:id', investment.remove, remove);
router.post('/setGainPerTicket', setGainPerTicket);


module.exports = router;