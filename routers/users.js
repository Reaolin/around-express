const express = require('express');
const userRouter = express.Router();

const { getUser, getOneUser, createUser } = require('../controllers/userController');

userRouter.get('/', getUser);
userRouter.get('/:_id', getOneUser);
userRouter.post('/', createUser);


module.exports = userRouter;
