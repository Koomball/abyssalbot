module.exports = {
  code: `
      $addContainer[
            $addTextDisplay[**Active Scroll**]
            $addTextDisplay[*No current scroll active*]
        $addSeparator[Large;true]
            $addTextDisplay[**View a Scrolls rewards or activate one**]
            $addActionRow
            $addStringSelectMenu[select_scroll;Select a Scroll]
            $addOption[Easy Scroll (1-3 Tasks);Easy Scroll, Obtainable in market;easy_scroll]
            $addOption[Standard Scroll (3-6 Tasks);Standard Scroll, Obtainable in market & Easy Scrolls;standard_scroll]
            $addOption[Hard Scroll (5-9 Tasks);Hard Scroll, Obtainable in Standard Scrolls;hard_scroll]
            $addOption[Devils Contract (12-16 Tasks);Devils Scroll, Obtainable in Hard Scrolls;devil_scroll]
    ]
    `,
  data: {
    name: "scrolls",
    description: "View your active scroll or activate one."
  }
};