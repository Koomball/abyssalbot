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
user_xp:"0"
})


client.commands.add(
module.exports = {
    name: "",
    type: "messageCreate",
    code: `
    $setMemberVar[user_xp;$sum[$getMemberVar[user_xp;$authorId;$guildId];5];$authorId;$guildId]
 
    `
})
client.login("")
client.applicationCommands.load("./commands");