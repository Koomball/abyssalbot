module.exports = {
    independent: true, // true = no sub-command from folder, false = sub-command from folder.
  code: `
    CODE HERE
  `,
  data: {
    name: "command_name",
    description: "command_description",

    // delete below if options are not needed
    options: [
      {
        name: "option_1",
        description: "option_description",
        type: 6, // USER
        required: true
      },
    ]
    // delete above if options are not needed
  },
};
