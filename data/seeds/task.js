exports.seed = async function (knex) {
  await knex("task").insert([
    {
      description: "Prep for the meeting",
      notes: "The meeting is Friday",
      completed: false,
      project_id: 1,
    },
  ]);
};
