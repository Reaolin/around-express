/* eslint-disable quotes */
const path = require("path");
const { getFileContent } = require("../helpers/getFileContent");

const cardsPath = path.join(__dirname, "..", "data", "cards.json");

function getCards(req, res) {
  return getFileContent(cardsPath).then((users) => {
    res.status(200).send(users);
  });
}

module.exports = {
  getCards,
};
