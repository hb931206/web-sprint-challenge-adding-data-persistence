const db = require("../data/config");
function find() {
  return db("task as t")
    .join("project as p", "p.id", "t.project_id")
    .select(
      "p.name as projectName",
      "p.description as projectDescription",
      "t.notes as projectNote",
      "t.description as taskDescription",
      "t.completed"
    );
}

module.exports = {
  find,
};
