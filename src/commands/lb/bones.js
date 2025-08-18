module.exports = {
  code: `
    $fetchMembers[$guildId]
    $addContainer[
            $addTextDisplay[**Bone Leaderboard**]
            $addTextDisplay[$memberLeaderboard[bones]]
    ]
  `,
  data: {
    name: "bones",
    description: "View the bone leaderboard.",
  },
};