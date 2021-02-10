/* eslint-disable no-underscore-dangle */
const path = require('path');
const { getFileContent } = require('../helpers/getFileContent');

const userPath = path.join(__dirname, '..', 'data', 'users.json');

function getUser(req, res) {
  return getFileContent(userPath)
  .then((users) => {
    res.status(200).send(users);
  });
}

function getOneUser(req, res) {
  return getFileContent(userPath)
  .then((users) => {
    const user = users.find((user) => user._id === req.params._id);

    if (user) {
      return res.status(200).send(user);
    }
    return res.status(404).send({ message: 'User ID not found' });
  });
}

module.exports = {
  getUser,
  getOneUser,
};
