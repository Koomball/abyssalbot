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
    
    $if[$channelId==1395421731593916558;
        $if[$getServerVar[drop_count]>=100;
            $setServerVar[drop_count;0] 
            $addContainer[
                $addTextDisplay[Be the first to say \`grab\` to obtain a bone!]
            ]
            $setServerVar[drop_active;true];
            
            $setServerVar[drop_count;$sum[$getServerVar[drop_count];$randomNumber[6;11]]]
        ]

        $if[$and[$getServerVar[drop_active]==true;$message[0]==grab];
            $if[$getChannelVar[streak_user]!=$authorId;
                $setChannelVar[streak_user;$authorId]
                $setChannelVar[streak_count;1];
                $setChannelVar[streak_count;$sum[$getChannelVar[streak_count];1]]
            ]
            $let[bones;$math[$randomNumber[5;8]*$getChannelVar[streak_count]]]
            $setMemberVar[bones;$math[$getMemberVar[bones]+$get[bones]]]
            $setServerVar[drop_active;false]
            <@$authorId> grabbed the bone and received $get[bones] bones! (Streak: $getChannelVar[streak_count]);
        ];
    ]
    `
})
client.login("")
client.applicationCommands.load("./commands");