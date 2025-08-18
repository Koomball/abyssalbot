module.exports = {
    independent: true,
    code: `
    $color[$getServerVar[clr]]
    $if[$option[user]==;
    $thumbnail[$userAvatar[$authorID]]
    $author[$username#$discriminator[$authorID]'s Profile';$userAvatar[$authorID]]
    $addField[Balance:;
    Bone: <:nBones:1406543368900710400> \`$getMemberVar[bones]\`
    Bank: <:nBones:1406543368900710400> \`$getMemberVar[bones_bank]\`
    Net: <:nBones:1406543368900710400> \`$math[$getMemberVar[bones]+$getMemberVar[bones_bank]]\`
    ;true]
    $addField[Level:;
    Level: \`$getMemberVar[user_lvl]\`
    Total XP: \`$getMemberVar[user_total_xp]\`
    ;true]
    $addField[About Me:;
    About me is under construction.;false]
    ;
    $thumbnail[$userAvatar[$option[user]]]
    $author[$username[$option[user]]#$discriminator[$option[user]]'s Profile';$userAvatar[$option[user]]]
    $addField[Balance:;
    Bone: <:nBones:1406543368900710400> \`$getMemberVar[bones;$option[user]]\`
    Bank: <:nBones:1406543368900710400> \`$getMemberVar[bones_bank;$option[user]]\`
    Net: <:nBones:1406543368900710400> \`$math[$getMemberVar[bones;$option[user]]+$getMemberVar[bones_bank;$option[user]]]\`
    ;true]
    $addField[Level:;
    Level: \`$getMemberVar[user_lvl;$option[user]]\`
    Total XP: \`$getMemberVar[user_total_xp;$option[user]]\`
    ;true]
    $addField[About Me:;
    About me is under construction.;false]
    ]

    `,
  data: {
    name: "profile",
    description: "Check a users profile, or your own",
    options: [
      {
        name: "user",
        description: "The user whos profile you want to view",
        type: 6, // USER
        required: false
      }
    ]
  }
};
