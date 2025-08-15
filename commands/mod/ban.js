module.exports = {
    independent: true,
  code: `
  $if[$hasPerms[$guildId;$authorId;KickMembers];
      $!kickMember[$guildId;$option[user];$option[reason]]
      $addContainer[
            $addTextDisplay[**User Banned**]
            $addTextDisplay[*User $username[$option[user]]*]
            $addSeparator[Large;true]
            $addTextDisplay[**Reason**]
            $addTextDisplay[*$option[reason]*]
    ]
  ]
    `,
  data: {
    name: "ban",
    description: "Ban a user.",
    options: [
      {
        name: "user",
        description: "The user to ban",
        type: 6, // USER
        required: true
      },
      {
        name: "reason",
        description: "The reason to ban",
        type: 3, // STRING
        required: false
      }
    ]
  }
};