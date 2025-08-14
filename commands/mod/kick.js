module.exports = {
    independent: true,
  code: `
  $if[$hasPerms[$guildId;$authorId;KickMembers];Kicked, $option[user]!]
    `,
  data: {
    name: "kick",
    description: "Kick a user.",
    options: [
      {
        name: "user",
        description: "The user to kick",
        type: 6, // USER
        required: true
      },
      {
        name: "reason",
        description: "The reason to kick",
        type: 3, // STRING
        required: false
      }
    ]
  }
};