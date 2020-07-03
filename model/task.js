const db = require("../data/config");
function find() {
  return db("task as t")
    .join("project as p", "p.id", "t.project_id")
    .select(
      "p.name",
      "p.description",
      "t.notes",
      "t.description",
      "t.completed"
    );
}

module.exports = {
  find,
};
