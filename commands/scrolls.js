module.exports = {
  code: `
      $addContainer[
            $addTextDisplay[**Active Scroll**]
            $addTextDisplay[*No current scroll active*]
        $addSeparator[Large;true]
            $addTextDisplay[**Activate a Scroll**]
            $addActionRow
            $addStringSelectMenu[select_scroll;Select a Scroll]
            $addOption[Easy Scroll;Easy Scroll, Obtainable in market;easy_scroll]
            $addOption[Standard Scroll;Standard Scroll, Obtainable in market & Easy Scrolls;standard_scroll]
            $addOption[Hard Scroll;Hard Scroll, Obtainable in Standard Scrolls;hard_scroll]
            $addOption[Devils Contract;Devils Scroll, Obtainable in Hard Scrolls;devil_scroll]
    ]
    `,
  data: {
    name: "scrolls",
    description: "View your active scroll or activate one."
  }
};