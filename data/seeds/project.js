exports.seed = async function (knex) {
  await knex(project).insert([
    {
      id: 1,
      name: "Operation Overlord",
      description: "Top Secret",
      completed: false,
    },
    {
      id: 2,
      name: "Operation Cowboy Lightning",
      description: "Top Secret",
      completed: false,
    },
  ]);
};
