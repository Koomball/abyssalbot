module.exports = {
  code: `
    $fetchMembers[$guildId]
    $addContainer[
            $addTextDisplay[**Level Leaderboard**]
            $addTextDisplay[$memberLeaderboard[user_lvl]]
    ]
  `,
  data: {
    name: "level",
    description: "View the level leaderboard.",
  },
};