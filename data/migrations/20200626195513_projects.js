exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments();
    table.text("name").notNull;
    table.text("description");
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments();
    table.text("name").unique();
    table.text("description");
  });

  await knex.schema.createTable("task", (table) => {
    table.increments();
    table.text("description");
    table.text("notes");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("task");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("project");
};
