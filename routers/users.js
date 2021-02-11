const express = require('express');
const userRouter = express.Router();

const { getUser, getOneUser } = require('../controllers/userController');

userRouter.get('/', getUser);

userRouter.get('/:_id', getOneUser);

module.exports = userRouter;
