const express = require('express');
const userRouter = express.Router();

const { getUser, getOneUser } = require('../controllers/userController');

userRouter.get('/users', getUser);

userRouter.get('/users/:_id', getOneUser);

module.exports = userRouter;
