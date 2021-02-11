const express = require('express');
const cardRouter = express.Router();

const { getCards } = require('../controllers/cardController');


cardRouter.get('/', getCards);

module.exports = cardRouter;
