const express = require('express');
const userRouter = express.Router();

const { getUser, getOneUser, createUser, updateUser } = require('../controllers/userController');

userRouter.get('/', getUser);

userRouter.get('/:_id', getOneUser);
userRouter.post('/', createUser);
userRouter.patch('/me', updateUser);

module.exports = userRouter;
