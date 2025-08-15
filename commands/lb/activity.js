module.exports = {
  code: `
    $addContainer[
            $addTextDisplay[**Daily Activity**]
            $addTextDisplay[*Prize: 100 Bones*]
            $addTextDisplay[*Top User: N/A at **100** messages*]
        $addSeparator
            $addTextDisplay[**Weekly Activity**]
            $addTextDisplay[*Prize: 200 Bones, 1 Month Nitro Basic*]
            $addTextDisplay[*Top User: N/A at **128** messages*]
        $addSeparator
            $addTextDisplay[**Monthly Activity**]
            $addTextDisplay[*Prize: 350 Bones, 1 Month Nitro*]
            $addTextDisplay[*Top User: N/A at **345** messages*]
    ]
  `,
  data: {
    name: "activity",
    description: "View the activity leaderboard and its rewards.",
  },
};