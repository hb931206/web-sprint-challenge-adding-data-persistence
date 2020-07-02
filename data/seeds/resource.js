exports.seed = async function (knex) {
  await knex("resource").insert([
    {
      name: "Projector",
      description: "George will pack it",
    },
  ]);
};
