module.exports = {
    type: "interactionCreate",
    code: `
    $if[$customId==activity_lb;
        $fetchMembers[$guildId]
        $switch[$selectMenuValues;
            $case[daily_lb;
                $let[title;Daily]
                $let[lb;$memberLeaderboard[messages]]]
            $case[weekly_lb;
                $let[title;Weekly]
                $let[lb;$memberLeaderboard[weekly_messages]]]
            $case[monthly_lb;
                $let[title;Monthly]
                $let[lb;$memberLeaderboard[monthly_messages]]]
        ]
        $interactionUpdate[
            $addContainer[
                $addTextDisplay[**$get[title] Leaderboard**]
                $addTextDisplay[$get[lb]]
                $addActionRow
                $addStringSelectMenu[activity_lb;Select a Leaderboard]
                $addOption[Daily;Reward: 100 Bones;daily_lb]
                $addOption[Weekly;Reward: 200 Bones + 1 Month Nitro Classic;weekly_lb]
                $addOption[Monthly;Reward: 300 Bones + 1 Month Nitro;monthly_lb]
            ]
        ]
    ]
    `
}