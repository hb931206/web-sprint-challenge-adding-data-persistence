exports.seed = async function (knex) {
  await knex("resource").insert([
    {
      name: "Projector",
      description: "For our client meeting",
    },
  ]);
};
