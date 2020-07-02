const db = require("../data/config");
function find() {
  return db("resource");
}

module.exports = {
  find,
};
