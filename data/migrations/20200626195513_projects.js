exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments();
    table.text("name").notNull();
    table.text("description");
    table.boolean("completed").defaultTo(false).notNull();
  });

  await knex.schema.createTable("resource", (table) => {
    table.increments();
    table.text("name").unique();
    table.text("description");
  });

  await knex.schema.createTable("task", (table) => {
    table.increments();
    table.text("description");
    table.text("notes");
    table.boolean("completed").defaultTo(false).notNull();
  });

  await knex.schema.createTable("project_resource", (table) => {
    table.integer("project_id").references("id").inTable("project");
    table.integer("resource_id").references("id").inTable("resources");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resource");
  await knex.schema.dropTableIfExists("task");
  await knex.schema.dropTableIfExists("resource");
  await knex.schema.dropTableIfExists("project");
};
