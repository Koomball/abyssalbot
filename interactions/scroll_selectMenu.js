module.exports = {
    type: "interactionCreate",
    code: `
    $if[$customId==select_scroll;
        $switch[$selectMenuValues;
            $case[easy_scroll;
                $let[title;Easy Scroll (1-3 Tasks)]
                $let[reward;[100%\\] 50-100 Bones\n[40%\\] Standard Scroll]]
            $case[standard_scroll;
                $let[title;Standard Scroll (3-6 Tasks)]
                $let[reward;[100%\\] 60-150 Bones\n[20%\\] Hard Scroll]]
            $case[hard_scroll;
                $let[title;Hard Scroll (5-9 Tasks)]
                $let[reward;[100%\\] 100-165 Bones\n[5%\\] Devils Contract]]
            $case[devil_scroll;
                $let[title;Devils Contract (12-16 Tasks)]
                $let[reward;[100%\\] 130-220 Bones]]
        ]
        $interactionUpdate[
            $addContainer[
                $addTextDisplay[**$get[title]**]
                $addTextDisplay[$get[reward]]
            $addSeparator[Large;true]
                $addTextDisplay[**View a Scrolls rewards or activate one**]
                $addActionRow
                $addStringSelectMenu[select_scroll;Select a Scroll]
                $addOption[Easy Scroll (1-3 Tasks);Easy Scroll, Obtainable in market;easy_scroll]
                $addOption[Standard Scroll (3-6 Tasks);Standard Scroll, Obtainable in market & Easy Scrolls;standard_scroll]
                $addOption[Hard Scroll (5-9 Tasks);Hard Scroll, Obtainable in Standard Scrolls;hard_scroll]
                $addOption[Devils Contract (12-16 Tasks);Devils Scroll, Obtainable in Hard Scrolls;devil_scroll]
            ]
            $addActionRow
            $addButton[Buy3;Activate $get[title];Primary]
        ]
    ]
    `
}