module.exports = {
    independent: true,
    code: `
    $author[$username#$discriminator[$authorID]]
    $title[You Beg the Void]
    $addField[A Voice Responds...;$randomText[Baphomet;Asmodeus;Satan;Beelzebub;Astaroth;Abaddon]: $randomText[Poor featherless biped;**What does a puny human want with me.**;Pathetic mortal… but amusing. Take this;Your groveling pleases me, take this as a gift.]]
    $addField[They gift you:;You have been gifted $randomNumber[10;35] bones.]
    $color[$getServerVar[clr]]
    $setMemberVar[bones;$math[$getMemberVar[bones]+$randomNumber[10;35]]]
    `,
    data: {
        name: "beg",
        description: "You beg the void, hoping to get some bones."
    }
}