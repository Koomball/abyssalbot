module.exports = {
  independent:true,
  code: `
    $addContainer[
        $addSection[
            $addTextDisplay[**Role Paint**]
            $addTextDisplay[*Create a custom color role, Worth 50 Messages*]
            $addButton[Buy;Buy (200 Bones);Primary]
        ]
        $addSeparator[Large;true]
        $addSection[
            $addTextDisplay[**Basic Quest Scroll**]
            $addTextDisplay[*Activate to recieve a quest of 1-3 tasks, each task offers a reward and at the final task recieve a special Scroll Lootbox.*]
            $addButton[Buy2;Buy (250 Bones);Primary]
        ]
        $addSeparator[Large;true]
        $addSection[
            $addTextDisplay[**Standard Quest Scroll**]
            $addTextDisplay[*Activate to recieve a quest of 3-6 tasks, each task offers a reward and at the final task recieve a special Scroll Lootbox.*]
            $addButton[Buy3;Buy (500 Bones);Primary]
        ]
    ]
  `,
  data: {
    name: "market",
    description: "View the market.",
  },
};