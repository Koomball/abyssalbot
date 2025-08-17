module.exports = {
  code: `
    $arrayLoad[timestamps;|;$getServerVar[activity_timestamps]]
    $addContainer[
            $addTextDisplay[**Daily Activity**\n*Prize: 100 Bones*\n*Resets in: <t:$round[$divide[$sum[$arrayAt[timestamps;0];86400000];1000]]:R>*]
            $addTextDisplay[*Top User: <@$getMemberLeaderboardID[messages;;1]> at **$getMemberVar[messages;$getMemberLeaderboardID[messages;;1]]** messages*]
        $addSeparator
            $addTextDisplay[**Weekly Activity**\n*Prize: 200 Bones, 1 Month Nitro Basic*\n*Resets in: <t:$round[$divide[$sum[$arrayAt[timestamps;1];604800000];1000]]:R>*]
            $addTextDisplay[*Top User: <@$getMemberLeaderboardID[weekly_messages;;1]> at **$getMemberVar[weekly_messages;$getMemberLeaderboardID[weekly_messages;;1]]** messages*]
        $addSeparator
            $addTextDisplay[**Monthly Activity**\n*Prize: 350 Bones, 1 Month Nitro*\n*Resets in: <t:$round[$divide[$sum[$arrayAt[timestamps;2];2.6280E+9];1000]]:R>*]
            $addTextDisplay[*Top User: <@$getMemberLeaderboardID[monthly_messages;;1]> at **$getMemberVar[monthly_messages;$getMemberLeaderboardID[monthly_messages;;1]]** messages*]
            $addActionRow
            $addStringSelectMenu[activity_lb;Select a Leaderboard]
            $addOption[Daily;Reward: 100 Bones;daily_lb]
            $addOption[Weekly;Reward: 200 Bones + 1 Month Nitro Classic;weekly_lb]
            $addOption[Monthly;Reward: 300 Bones + 1 Month Nitro;monthly_lb]
    ]
  `,
  data: {
    name: "activity",
    description: "View the activity leaderboard and its rewards.",
  },
};