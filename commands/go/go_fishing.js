module.exports = {
    code: `
$let[rng;$randomNumber[1;100;true]]
$userCooldown[$authorID;10s;> You can fish again <t:$round[$divide[$sum[$getTimestamp;$getUserCooldownTime[$authorID]];1000]]:R>]
$ifx[
    $if[$get[rng]<=10; $c[// 10%]
    $title[Fishing]
    $description[
        > You can fish again <t:$round[$divide[$sum[$getTimestamp;$getUserCooldownTime[$authorID]];1000]]:R>
        You cast out your line...
        
        **You caught:**
        $randomText[2;3;4] Cloth
        $randomText[1;2;3] Branches
        1 Boot
        
    ]
    $color[$getServerVar[clr]]
    $setMemberVar[cloth;$math[$getMemberVar[cloth]+$randomText[2;3;4]]]
    $setMemberVar[branch;$math[$getMemberVar[branch]+$randomText[1;2;3]]]
    $setMemberVar[boot;$math[$getMemberVar[boot]+1]]
    ]
    $elseIf[$get[rng]<=50; $c[50%]
    $title[Fishing]
    $title[Fishing]
    $description[
        > You can fish again <t:$round[$divide[$sum[$getTimestamp;$getUserCooldownTime[$authorID]];1000]]:R>
        You cast out your line...
        
        **You caught:**
        $randomText[2;3;4] Cloth
        $randomText[1;2;3] Branches
        1 Boot
        
    ]
    $color[$getServerVar[clr]]
    $setMemberVar[cloth;$math[$getMemberVar[cloth]+$randomText[2;3;4]]]
    $setMemberVar[branch;$math[$getMemberVar[branch]+$randomText[1;2;3]]]
    $setMemberVar[boot;$math[$getMemberVar[boot]+1]]
    ]
    $elseIf[$get[rng]<=80; $c[80%]
    $title[Fishing]
    $title[Fishing]
    $description[
        > You can fish again <t:$round[$divide[$sum[$getTimestamp;$getUserCooldownTime[$authorID]];1000]]:R>
        You cast out your line...
        
        **You caught:**
        $randomText[2;3;4] Cloth
        $randomText[1;2;3] Branches
        1 Boot
        
    ]
    $color[$getServerVar[clr]]
    $setMemberVar[cloth;$math[$getMemberVar[cloth]+$randomText[2;3;4]]]
    $setMemberVar[branch;$math[$getMemberVar[branch]+$randomText[1;2;3]]]
    $setMemberVar[boot;$math[$getMemberVar[boot]+1]]
    ]
    $else[
        $title[Cast Failed]
        $description[
            > You can fish again in <t:$round[$divide[$sum[$getTimestamp;$getUserCooldownTime[$authorID]];1000]]:R>
            You cast your line out but $randomText[it got caught on a branch above;your hook wasnt knotted correctly and flew off;you hooked a passerby].
        ]
        $color[$getServerVar[clr]]
    ]
]
    `,
    data: {
        name:"fishing",
        description:"Go fishing in the graveyards pond"
    }
}