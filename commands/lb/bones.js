module.exports = {
  code: `
    $addContainer[
            $addTextDisplay[**Bone Leaderboard**]
            $addTextDisplay[$memberLeaderboard[bones;$guildId;asc;10;1;\n;]]
    ]
  `,
  data: {
    name: "bones",
    description: "View the bone leaderboard.",
  },
};