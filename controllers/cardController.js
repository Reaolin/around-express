
const path = require('path');
const { getFileContent } = require("../helpers/getFileContent");

const cardPath = path.join(__dirname, "..", "data", "cards.json");

function getCards(req, res) {
  return getFileContent(cardPath).then((cards) => {
    res.status(200).send(cards);
  });
}

module.exports = {
  getCards,
};
