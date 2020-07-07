exports.seed = async function (knex) {
  await knex("resource").insert([
    {
      name: "Projector",
      description: "Henry will pack it",
    },
  ]);
};
