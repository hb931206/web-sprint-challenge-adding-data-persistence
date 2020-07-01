exports.seed = async function (knex) {
  await knex(resource).insert([
    {
      id: 1,
      name: "Projector",
      description: "For our client meeting",
    },
    {
      id: 2,
      name: "Computer",
      description: "Need this for the presentation",
    },
  ]);
};
