exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments();
    table.text("name").notNull;
    table.text("description");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
};
