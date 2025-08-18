module.exports = {
  independent: true,
  code: `
  $if[$hasPerms[$guildID;$authorID;Administrator]==false;
  You do not have permission to use this command.;
  $setGuildVar[clr;$option[hex]]
  $ephemeral
  Embed colour set to $getServerVar[clr]
  ]

    `,
  data: {
    name: "embedcolour",
    description: "Change the colour of the bots embeds for your server",
    options: [
      {
        name: "hex",
        description: "the hex code of the colour you want",
        type: 3, // STRING
        required: true
      }
    ]
  }
};