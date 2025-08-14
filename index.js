const { ForgeClient } = require("@tryforge/forgescript")

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
    ] // The prefixes to use for our bot!
})

client.login("")
client.applicationCommands.load("./commands");