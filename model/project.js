const db = require("../data/config");
function find() {
  return db("project");
}

module.exports = {
  find,
};
