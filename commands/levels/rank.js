module.exports = {
    independent: true,
  code: `
    $addContainer[
      $addSection[
        $addTextDisplay[**Level for $username[$authorId]**]
        $addTextDisplay[Level: **$getMemberVar[user_lvl;$authorId]**]
        $addTextDisplay[XP: **$getMemberVar[user_xp;$authorId;$guildId]/$round[$getMemberVar[user_xp_tolvl;$authorID]]**]
        $addThumbnail[$userAvatar[$authorId]]
      ]
    $addSeparator[Large;true];
        $memberDisplayColor[$guildId;$authorId]
    ]
    `,
  data: {
    name: "rank",
    description: "View your rank."
  }
};