module.exports = {
  code: `
  $addContainer[
    $addSection[
        $addTextDisplay[
            \`/help\` - this command

            \`/ban\` - ban command
            \`/kick\` - kick command
            \`/mute\` - mute command

            \`/user\` - user info
            \`/server\` - server info
        ]
    ]
  ]

  `,
  data: {
    name: "help",
    description: "View all the bots commands.",
  },
};