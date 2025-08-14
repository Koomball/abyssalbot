module.exports = {
    independent: true,
  code: `
      $addContainer[
            $addTextDisplay[**Bone Balance**]
            $addTextDisplay[*$getMemberVar[bones;$authorId;$guildId]*]
        $addSeparator[Large;true]
            $addTextDisplay[**Bank**]
            $addTextDisplay[*$getMemberVar[bones_bank;$authorId;$guildId]*]
    ]
    `,
  data: {
    name: "bal",
    description: "View your bone balance."
  }
};
