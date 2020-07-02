exports.seed = async function (knex) {
  await knex("project").insert([
    {
      name: "Operation Overlord",
      description: "Top Secret",
      completed: false,
    },
  ]);
};
