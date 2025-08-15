module.exports = {
  code: `
    $addContainer[
            $addTextDisplay[**Level Leaderboard**]
            $addTextDisplay[$memberLeaderboard[user_lvl;$guildId;asc;10;1;\n;]]
    ]
  `,
  data: {
    name: "level",
    description: "View the level leaderboard.",
  },
};