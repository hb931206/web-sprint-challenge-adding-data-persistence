exports.seed = async function (knex) {
  await knex("task").insert([
    {
      id: 1,
      description: "Prep for the meeting",
      notes: "The meeting is Friday",
      completed: false,
    },
    {
      id: 2,
      description: "Debrief after the call",
      notes: "The call went well",
      completed: false,
    },
  ]);
};
