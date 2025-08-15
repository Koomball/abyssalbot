const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")

const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent" // This intent is privileged, must be whitelisted in dev portal, in your application.
    ],
    events: [
        "messageCreate",
        "ready"
    ], // Events our bot will act on
    prefixes: [
        "!",
        "?"
    ],// The prefixes to use for our bot!
    extensions: [
    new ForgeDB()
    ]
})

ForgeDB.variables({
    // Levels & XP
user_xp:"0",
user_total_xp:"0",
user_lvl:"0",
user_xp_tolvl:"100",

    // Bones & Economy
bones:"0",
bones_bank:"0",

    // Items
item_paint:"0",

    // Other
booster:false,
drop_count:"0",
drop_active:false,

streak_user:"0",
streak_count:"0",

    // Activity lb
daily_messages:"0",
weekly_messages:"0",
monthly_messages:"0",
})


client.commands.add(
module.exports = {
    // Runs every message
    name: "",
    type: "messageCreate",
    code: `
    $let[xp;$randomNumber[4;10]]
    $setMemberVar[user_xp;$sum[$getMemberVar[user_xp;$authorId;$guildId];$get[xp]];$authorId;$guildId]
    $setMemberVar[user_total_xp;$sum[$getMemberVar[user_total_xp;$authorId;$guildId];$get[xp]];$authorId;$guildId]
    $if[$getMemberVar[user_xp;$authorId]>=$getMemberVar[user_xp_tolvl;$authorId];
        $setMemberVar[user_xp;$sub[$getMemberVar[user_xp;$authorId];$getMemberVar[user_xp_tolvl;$authorId]];$authorId]
        $setMemberVar[user_lvl;$sum[$getMemberVar[user_lvl;$authorId];1];$authorId]
        $setMemberVar[user_xp_tolvl;$round[$math[$getMemberVar[user_xp_tolvl;$authorId]*(1.35+($getMemberVar[user_lvl;$authorId]/10))]]]

        $addContainer[
            $addTextDisplay[**Level Up!**]
            $addTextDisplay[🎉 Congratulations <@$authorId>, you've reached Level $getMemberVar[user_lvl;$authorId]!]
    ]
    ]
    
    $if[$channelId==1400177232680587304;
        $if[$getChannelVar[drop_count]>=100;
            $setChannelVar[drop_count;0] 
            $addContainer[
                $addTextDisplay[Be the first to say \`grab\` to obtain a bone!]
            ]
            $setChannelVar[drop_active;true];
            
            $setChannelVar[drop_count;$sum[$getServerVar[drop_count];$randomNumber[28;76]]]
        ]

        $if[$and[$getChannelVar[drop_active]==true;$message==grab];
            $setChannelVar[drop_active;false]
            $if[$getChannelVar[streak_user]!=$authorId;
                $setChannelVar[streak_user;$authorId]
                $setChannelVar[streak_count;1];
                $setChannelVar[streak_count;$sum[$getChannelVar[streak_count];1]]
            ]
            $let[bones;$round[$math[$randomNumber[5;8]*($getChannelVar[streak_count]/3)]]]
            $if[$get[bones]<5;$let[bones;5]]
            $setMemberVar[bones;$math[$getMemberVar[bones]+$get[bones]]]
            <@$authorId> grabbed the bone and received $get[bones] bones! (Streak: $getChannelVar[streak_count]);
        ]
    ]
    `
})
client.login("")
client.applicationCommands.load("./commands");
client.commands.load("./interactions");