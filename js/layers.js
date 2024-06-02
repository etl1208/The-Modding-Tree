addLayer("a", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "No", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#bcbcbc",
    requires: new Decimal(0.00001), // Can be a function that takes requirement increases into account
    resource: "No points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('h', 11)) mult = mult.times(2)
        return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("g", 16)) generatePoints("a", diff);
    },
    update(diff) {
        if (hasUpgrade("h", 14)) generatePoints("a", diff);
    },
    upgrades: {
        11: {
            title: "What the hell>",
            description: "x2 point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Useless?",
            description: "+2e-5 point gain.",
            cost: new Decimal(2),
        },
        13: {
            title: "Not Anymore",
            description: "x1.1 point gain.",
            cost: new Decimal(5),
        },
        14: {
            title: "Super balancing",
            description: "x3 point gain.",
            cost: new Decimal(10),
        },
        15: {
            title: "Its fun, isn't it?",
            description: "x3 point again",
            cost: new Decimal(20),
        },
        21: {
            title: "So.. when will we reach 1?",
            description: "x10 point gain",
            cost: new Decimal(100),
        },
        22: {
            title: "Timewall",
            description: "x1.2 point gain",
            cost: new Decimal(200),
        },
        23: {
            title: "Timewall v2",
            description: "x1.5 point gain",
            cost: new Decimal(300),
        },
        24: {
            title: "Spam!!!!",
            description: "x1.8 point gain",
            cost: new Decimal(500),
        },
        25: {
            title: "The hard way",
            description: "+0.02 point gain",
            cost: new Decimal(750),
        },
        31: {
            title: "2000 is not hard right?",
            description: "+0.05 point gain",
            cost: new Decimal(2000),
        },
        32: {
            title: "First 1",
            description: "x2 point gain",
            cost: new Decimal(5000),
        },
        33: {
            title: "NO!!!!",
            description: "x5 point gain",
            cost: new Decimal(10000),
        },
        34: {
            title: "Waste of time",
            description: "x1.08 point gain",
            cost: new Decimal(15000),
        },
        35: {
            title: "Totally a waste of time",
            description: "x1.05 point gain",
            cost: new Decimal(20000),
        },
        41: {
            title: "Serious dedication",
            description: "x1.04 point gain",
            cost: new Decimal(25000),
        },
        42: {
            title: "Are you OK????",
            description: "x1.035 point gain",
            cost: new Decimal(30000),
        },
        43: {
            title: "Bro left me speechless?",
            description: "x1.03 point gain",
            cost: new Decimal(35000),
        },
        44: {
            title: "Hello?? Please move to OK",
            description: "x1.02 point gain",
            cost: new Decimal(40000),
        },
        45: {
            title: "Wow..",
            description: "x1.01 point gain",
            cost: new Decimal(50000),
        },
        51: {
            title: "YOU WON, BUT AT WHAT COST",
            description: "x10 point gain",
            cost: new Decimal(200000),
        },
        16: {
            title: "Extra upgrade 1",
            description: "x1.1 point gain",
            cost: new Decimal(10000),
        },
        26: {
            title: "Extra upgrade 2",
            description: "x1.1 point gain",
            cost: new Decimal(20000),
        },
        36: {
            title: "Extra upgrade 3",
            description: "x1.1 point gain",
            cost: new Decimal(40000),
        },
        46: {
            title: "Extra upgrade 4",
            description: "x1.1 point gain",
            cost: new Decimal(80000),
        },
        52: {
            title: "I hope you are smart",
            description: "x1.2 point gain",
            cost: new Decimal(1000000),
        },
        53: {
            title: "Boss upgrade",
            description: "No points boost points",
            cost: new Decimal(10**30),
            effect() {
                return player[this.layer].points.add(1).pow(0.08)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        54: {
            title: "GGs on reaching a googol",
            description: "No points boost points again but weaker",
            cost: new Decimal(10**100),
            effect() {
                return player[this.layer].points.add(1).pow(0.06)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    },
    layerShown(){return true}
}
)
addLayer("b", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "OK", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#aabbcc",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "OK", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('h', 11)) mult = mult.times(2)
        if (hasUpgrade('j', 15)) mult = mult.times(1.2)
        return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("g", 16)) generatePoints("b", diff);
    },
    update(diff) {
        if (hasUpgrade("h", 15)) generatePoints("b", diff);
    },
    upgrades: {
        11: {
            title: "First 10!",
            description: "x2 point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "+1 point gain",
            description: "Yes.",
            cost: new Decimal(10),
        },
        13: {
            title: "+2 point gain",
            description: "So true.",
            cost: new Decimal(25),
        },
        14: {
            title: "+3 point gain",
            description: "I can smell the increment...",
            cost: new Decimal(50),
        },
        15: {
            title: "+5 point gain",
            description: "Take it or leave it",
            cost: new Decimal(75),
        },
        21: {
            title: "Where things gett interesting.",
            description: "x2 point gain",
            cost: new Decimal(100),
        },
        22: {
            title: "Did you bought the last upgrade in No?",
            description: "x1.25 point gain",
            cost: new Decimal(300),
        },
        23: {
            title: "Buyable 1/3",
            description: "x1.5 point gain",
            cost: new Decimal(500),
        },
        24: {
            title: "Buyable 2/3",
            description: "x1.5 point gain",
            cost: new Decimal(600),
        },
        25: {
            title: "Buyable 3/3",
            description: "x1.5 point gain",
            cost: new Decimal(700),
        },
        31: {
            title: "Lol cost nerf",
            description: "x3 point gain",
            cost: new Decimal(800),
        },
        32: {
            title: "Let's inflate a bit",
            description: "x3 point gain",
            cost: new Decimal(900),
        },
        33: {
            title: "Inflate more",
            description: "x3 point gain",
            cost: new Decimal(1000),
        },
        34: {
            title: "INFLATE MOREEEEEEEEE",
            description: "x5 point gain",
            cost: new Decimal(1500),
        },
        35: {
            title: "Remember this upgrade exist",
            description: "x25 point gain",
            cost: new Decimal(2500000),
        },
        41: {
            title: "Not quite my tempo",
            description: "OK boost points",
            cost: new Decimal(10**12),
            effect() {
                return player[this.layer].points.add(1).pow(0.08)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        42: {
            title: "1 Gooogol OK",
            description: "OK boost points, but... stronger?",
            cost: new Decimal(10**100),
            effect() {
                return player[this.layer].points.add(1).pow(0.09)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    },
    layerShown(){return true}
}
)
addLayer("c", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "OMG", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff60ff",
    requires: new Decimal(2000000), // Can be a function that takes requirement increases into account
    resource: "OMG", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 41))
            mult = mult.times(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('h', 11)) mult = mult.times(2)
        return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 16)) generatePoints("c", diff);
    },
    update(diff) {
        if (hasUpgrade("c", 32)) generatePoints("c", diff);
    },
    upgrades: {
        11: {
            title: "Shocking",
            description: "x2.5 point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Superb",
            description: "x1.5 point gain.",
            cost: new Decimal(4),
        },
        13: {
            title: "Amazing",
            description: "x3 point gain.",
            cost: new Decimal(9),
        },
        14: {
            title: "Accelerate",
            description: "x4 point gain.",
            cost: new Decimal(16),
        },
        15: {
            title: "Accelerater",
            description: "x5 point gain.",
            cost: new Decimal(25),
        },
        16: {
            title: "Acceleratest",
            description: "x6 point gain.",
            cost: new Decimal(36),
        },
        17: {
            title: "Time Warp",
            description: "x7 point gain.",
            cost: new Decimal(100),
        },
        18: {
            title: "Pinnacle of time",
            description: "x8 point gain.",
            cost: new Decimal(250),
        },
        19: {
            title: "A god being",
            description: "x9 point gain.",
            cost: new Decimal(600),
        },
        21: {
            title: "This is new",
            description: "OMG boost points",
            cost: new Decimal(1000),
            effect() {
                return player[this.layer].points.add(1).pow(0.12)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "Another one, i love it",
            description: "OMG boost points",
            cost: new Decimal(1250),
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        23: {
            title: "ANOTHER ONE",
            description: "OMG boost points",
            cost: new Decimal(1500),
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        24: {
            title: "No need explaination",
            description: "OMG boost points",
            cost: new Decimal(1750),
            effect() {
                return player[this.layer].points.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        25: {
            title: "Abuse it",
            description: "OMG boost points",
            cost: new Decimal(3500),
            effect() {
                return player[this.layer].points.add(1).pow(0.45)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        26: {
            title: "Call the cops he abused too much",
            description: "OMG boost points",
            cost: new Decimal(5000),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        27: {
            title: "Ok thats enough",
            description: "OMG boost points",
            cost: new Decimal(25000),
            effect() {
                return player[this.layer].points.add(1).pow(0.55)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        28: {
            title: "STOOOOOOOOOOOPPPPPPPPPPP xd",
            description: "OMG boost points",
            cost: new Decimal(100000),
            effect() {
                return player[this.layer].points.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        29: {
            title: "Last upgrade, sad",
            description: "OMG boost points",
            cost: new Decimal(1000000),
            effect() {
                return player[this.layer].points.add(1).pow(0.65)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        31: {
            title: "I definitely should nerf this layer",
            description: "OMG boost points",
            cost: new Decimal(10**32),
            effect() {
                return player[this.layer].points.add(1).pow(0.125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        32: {
            title: "I Gave up",
            description: "Generate 100% of OMG points per second",
            cost: new Decimal(10**200),
        },
    layerShown(){return true}
    },
}
)
addLayer("d", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "XD", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffddff",
    requires: new Decimal(10**69), // Can be a function that takes requirement increases into account
    resource: "XD", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.03, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('h', 11)) mult = mult.times(2)
        return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    upgrades: {
        11: {
            title: "So Funny",
            description: "x6.9 point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Same stuff but weaker",
            description: "XD boosts points.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "This is Funnier",
            description: "x(6.9^2) point gain.",
            cost: new Decimal(20),
        },
        14: {
            title: "Can't be funnier than this.",
            description: "x(6.9^6.9) point gain.",
            cost: new Decimal(120),
        },
        15: {
            title: "Maybe try revisiting OMG again.",
            description: "x69 point gain.",
            cost: new Decimal(2000),
        },
        16: {
            title: "Will this tree have buyables?",
            description: "x420 point gain.",
            cost: new Decimal(4000),
        },
        17: {
            title: "I guess not",
            description: "x32 point gain.",
            cost: new Decimal(8000),
        },
        18: {
            title: "Playing multiples now",
            description: "x128 point gain.",
            cost: new Decimal(16000),
        },
        19: {
            title: "Return of the buffs",
            description: "XD boosts points but nerfed whyy",
            cost: new Decimal(40000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "You bored yet?",
            description: "XD boost points",
            cost: new Decimal(80000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "Yes you are",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(120000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.14)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        23: {
            title: "But sadly, you can't do anything",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(180000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.13)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        24: {
            title: "There is always a way",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(5000000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.12)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        25: {
            title: "With the aid of all previous points",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(15000000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.11)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        26: {
            title: "You still need to remember,",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(25000000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        27: {
            title: "This is the hardest tree",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(50000000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.09)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        28: {
            title: "Last mega boost, good luck reaching e308",
            description: "XD boost points but weaker than the last upgrade",
            cost: new Decimal(100000000),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.08)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    layerShown(){return true}
    },
}
)
addLayer("e", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "INF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 5, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#aaaaaa",
    requires: new Decimal(10**308), // Can be a function that takes requirement increases into account
    resource: "Infinite points", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.005, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('f', 31)) mult = mult.times(2)
        if (hasUpgrade('f', 32)) mult = mult.times(5)
        if (hasUpgrade('f', 33)) mult = mult.times(6)
        if (hasUpgrade('f', 34)) mult = mult.times(7)
        if (hasUpgrade('f', 35)) mult = mult.times(8)
        if (hasUpgrade('f', 36)) mult = mult.times(9)
        if (hasUpgrade('g', 11)) mult = mult.times(10)
        if (hasUpgrade('g', 12)) mult = mult.times(100)
        if (hasUpgrade('g', 13)) mult = mult.times(1000)
        if (hasUpgrade('g', 14)) mult = mult.times(10**6)
        if (hasUpgrade('g', 15)) mult = mult.times(10**12)
        if (hasUpgrade('g', 16)) mult = mult.times(10**15)
        if (hasUpgrade('g', 17)) mult = mult.times(10**18)
        if (hasUpgrade('g', 18)) mult = mult.times(10**24)
        if (hasUpgrade('g', 19)) mult = mult.times(10**28)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 16)) generatePoints("e", diff);
    },
    upgrades: {
        11: {
            title: "Yep, thats litarally it (Warning, overpowered)",
            description: "Infinite points boost points",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    layerShown(){return true}
    },
}
)
addLayer("f", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#c76efc",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Story points", // Name of prestige currency
    baseResource: "Infinite Points", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('f', 37)) mult = mult.times(2)
        if (hasUpgrade('f', 38)) mult = mult.times(3)
        if (hasUpgrade('f', 39)) mult = mult.times(5)
        if (hasUpgrade('g', 13)) mult = mult.times(2)
        if (hasUpgrade('g', 14)) mult = mult.times(500)
        if (hasUpgrade('f', 41)) mult = mult.times(upgradeEffect('f', 41))
        if (hasUpgrade('f', 42)) mult = mult.times(upgradeEffect('f', 42))
        if (hasUpgrade('f', 43)) mult = mult.times(upgradeEffect('f', 43))
        if (hasUpgrade('g', 15)) mult = mult.times(500000)
        if (hasUpgrade('g', 16)) mult = mult.times(10000000)
        if (hasUpgrade('g', 17)) mult = mult.times(50000000)
        if (hasUpgrade('g', 18)) mult = mult.times(10**9)
        if (hasUpgrade('g', 19)) mult = mult.times(5*(10**10))
        return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 17)) generatePoints("f", diff);
    },
    upgrades: {
        11: {
            title: "Okay, let me tell you a story..",
            description: "Points x320",
            cost: new Decimal(10),
        },
        12: {
            title: "Once upon a time,",
            description: "Points x280",
            cost: new Decimal(20),
        },
        13: {
            title: "There was a person",
            description: "Points x240",
            cost: new Decimal(40),
        },
        14: {
            title: "His name is johnney",
            description: "Points x200",
            cost: new Decimal(60),
        },
        15: {
            title: "Wanna know a fun fact about him?",
            description: "Points x180",
            cost: new Decimal(80),
        },
        16: {
            title: "You will be shocked;",
            description: "Points x160",
            cost: new Decimal(100),
        },
        17: {
            title: "His house is made from galvanized square steel",
            description: "Points x140",
            cost: new Decimal(120),
        },
        18: {
            title: "And this is the reason he is so popular.",
            description: "Points x120",
            cost: new Decimal(140),
        },
        19: {
            title: "Because people make fun of him",
            description: "Points x100",
            cost: new Decimal(160),
        },
        21: {
            title: "But Johney didn't give up",
            description: "Points x90",
            cost: new Decimal(180),
        },
        22: {
            title: "He got good grades,",
            description: "Points x80",
            cost: new Decimal(200),
        },
        23: {
            title: "Good physique,",
            description: "Points x70",
            cost: new Decimal(220),
        },
        24: {
            title: "And even got a girlfriend",
            description: "Points x60",
            cost: new Decimal(240),
        },
        25: {
            title: "Now people instead of making fun of him,",
            description: "Points x50",
            cost: new Decimal(280),
        },
        26: {
            title: "They are jealous of him.",
            description: "Points x40",
            cost: new Decimal(300),
        },
        27: {
            title: "Because johney biggest secret is he's rich",
            description: "Points x30",
            cost: new Decimal(320),
        },
        28: {
            title: "Moral of the story,",
            description: "Points x20",
            cost: new Decimal(340),
        },
        29: {
            title: "Never judge a book by its cover",
            description: "Points x10",
            cost: new Decimal(360),
        },
        31: {
            title: "We got part 2 of the story",
            description: "Infinite points x2",
            cost: new Decimal(500),
        },
        32: {
            title: "Part 3 is out",
            description: "Infinite points x5",
            cost: new Decimal(800),
        },
        33: {
            title: "We even got part 10",
            description: "Infinite points x6",
            cost: new Decimal(2000),
        },
        34: {
            title: "Story is getting popular",
            description: "Infinite points x7",
            cost: new Decimal(4000),
        },
        35: {
            title: "Its getting views",
            description: "Infinite points x8",
            cost: new Decimal(8000),
        },
        36: {
            title: "People really loves it!",
            description: "Infinite points x9",
            cost: new Decimal(15000),
        },
        37: {
            title: "The whole world knows the story",
            description: "Story points x2",
            cost: new Decimal(15000000),
        },
        38: {
            title: "Even aliens know it now",
            description: "Story points x3",
            cost: new Decimal(50000000),
        },
        39: {
            title: "Whole universe enjoyed it",
            description: "Story points x5",
            cost: new Decimal(500000000),
        },
        41: {
            title: "Even the multiverse",
            description: "Story points boosts itself",
            cost: new Decimal(10**10),
            effect() {
                return player.f.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        42: {
            title: "The story is known to all dimensions...",
            description: "Story points boosts itself but stronger",
            cost: new Decimal(10**20),
            effect() {
                return player.f.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        43: {
            title: "The story inspired all realities",
            description: "Story points boosts itself but STRONGER",
            cost: new Decimal(10**100),
            effect() {
                return player.f.points.add(1).pow(0.22)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    layerShown(){return true}
    },
}
)
addLayer("g", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 7, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#F75E25",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Milestone Points", // Name of prestige currency
    baseResource: "Story Points", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1000000)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 18)) generatePoints("g", diff);
    },
    upgrades: {
        11: {
            title: "Milestone 01",
            description: "x10 Infinite points",
            cost: new Decimal(1),
        },
        12: {
            title: "Milestone 02",
            description: "x100 Infinite points",
            cost: new Decimal(2),
        },
        13: {
            title: "Milestone 03",
            description: "x1000 Infinite points, x2 story points",
            cost: new Decimal(3),
        },
        14: {
            title: "Milestone 04",
            description: "x1e6 Infinite points, x500 story points",
            cost: new Decimal(4),
        },
        15: {
            title: "Milestone 05",
            description: "x1e12 Infinite points, x500k story points",
            cost: new Decimal(5),
        },
        16: {
            title: "Milestone 06",
            description: "x1e15 Infinite points, x10M story points,Generate 100% NO, OK points per second",
            cost: new Decimal(6),
        },
        17: {
            title: "Milestone 07",
            description: "x1e18 Infinite points, x50M story points",
            cost: new Decimal(7),
        },
        18: {
            title: "Milestone 08",
            description: "x1e24 Infinite points, x1B story points",
            cost: new Decimal(8),
        },
        19: {
            title: "Milestone 09",
            description: "x1e28 Infinite points, x50B story points",
            cost: new Decimal(9),
        },
        21: {
            title: "Milestone 10",
            description: "Unlock Loop and finish this layer",
            cost: new Decimal(10),
        },
    layerShown(){return true}
    },
}
)
addLayer("h", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#F5D033",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Loop", // Name of prestige currency
    baseResource: "Milestone Points", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(10)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(10**308)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 21)) generatePoints("h", diff);
        if (hasUpgrade("h", 22)) generatePoints("h", diff);
        if (hasUpgrade("h", 22)) generatePoints("h", diff);
        if (hasUpgrade("h", 22)) generatePoints("h", diff);
        if (hasUpgrade("h", 22)) generatePoints("h", diff);
    },
    upgrades: {
        11: {
            title: "Loop 1",
            description: "NO, OK, OMG, XD point gain is ^2",
            cost: new Decimal(1),
        },
        12: {
            title: "Loop 3",
            description: "Okay... x5 Super Looplets",
            cost: new Decimal(2),
        },
        13: {
            title: "Loop 6",
            description: "NO points boost points. 100% rate",
            effect() {
                return player.a.points.add(1).pow(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(3),
        },
        14: {
            title: "Loop 10",
            description: "Start generating NO points if it hasnt already",
            cost: new Decimal(4),
        },
        15: {
            title: "Loop 15",
            description: "Start generating OK points if it hasnt already, also OK points boost points, 100% rate.",
            effect() {
                return player.b.points.add(1).pow(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(5),
        },
        16: {
            title: "Loop 21",
            description: "Start generating OMG and Infinite points if it hasnt already",
            cost: new Decimal(6),
        },
        17: {
            title: "Loop 30",
            description: "Start generating Story points if it hasnt already",
            cost: new Decimal(9),
        },
        18: {
            title: "Loop 50",
            description: "Start generating Milestone points if it hasnt already",
            cost: new Decimal(19),
        },
        19: {
            title: "King Of Looping, Loop 100",
            description: "Looping boost Super Looplets",
            effect() {
                return player.h.points.add(1).pow(1.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(50),
        },
        21: {
            title: "You are CRAZY, Loop 1000",
            description: "Auto Loop, 1 time per second",
            cost: new Decimal(989),
        },
        22: {
            title: "Did you enable offline progress?, Loop 10000",
            description: "Gain 4 loop per second",
            cost: new Decimal(9989),
        },
    layerShown(){return true}
    },
}
)
addLayer("i", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "LL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D1D646",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Looplets", // Name of prestige currency
    baseResource: "looplets", // Name of resource prestige is based on
    baseAmount() {return player.i.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(NaN)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("h", 11)) generatePoints("i", diff);
        if (hasUpgrade("i", 11)) generatePoints("i", diff);
        if (hasUpgrade("i", 12)) generatePoints("i", diff);
        if (hasUpgrade("i", 12)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 13)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
        if (hasUpgrade("i", 14)) generatePoints("i", diff);
    },
    upgrades: {
        11: {
            title: "Ignore aLL the chaos caused by OMG points, this is new",
            description: "x2 looplets gain",
            cost: new Decimal(10),
        },
        12: {
            title: "Double production shall we",
            description: "x2 looplets gain",
            cost: new Decimal(50),
        },
        13: {
            title: "Triple it",
            description: "x3 looplets gain",
            cost: new Decimal(100),
        },
        14: {
            title: "Ok last upgrade no joke",
            description: "x10 looplets gain",
            cost: new Decimal(400),
        },
        15: {
            title: "LOL (Meme upgrade)",
            description: "+1 base point gain",
            cost: new Decimal(69420),
        },
    layerShown(){return true}
    },
}
)
addLayer("j", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SLL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#BDB246",
    requires: new Decimal(2000), // Can be a function that takes requirement increases into account
    resource: "Super Looplets", // Name of prestige currency
    baseResource: "Looplets", // Name of resource prestige is based on
    baseAmount() {return player.i.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('j', 11)) mult = mult.times(1.5)
        if (hasUpgrade('j', 12)) mult = mult.add(1)
        if (hasUpgrade('j', 13)) mult = mult.add(2)
        if (hasUpgrade('j', 14)) mult = mult.times(2)
        if (hasUpgrade('h', 12)) mult = mult.times(5)
        if (hasUpgrade('j', 15)) mult = mult.times(4)
        if (hasUpgrade('j', 16)) mult = mult.times(3)
        if (hasUpgrade('j', 17)) mult = mult.times(upgradeEffect('j', 17))
        if (hasUpgrade('j', 18)) mult = mult.times(1.5)
        if (hasUpgrade('j', 19)) mult = mult.times(2)
        if (hasUpgrade('k', 13)) mult = mult.times(5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    update(diff) {
        if (hasUpgrade("k", 16)) generatePoints("j", diff);
    },
    upgrades: {
        11: {
            title: "Super Looplets!",
            description: "x1.5 super looplets gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "When does the loop end?",
            description: "+1 base super looplets gain",
            cost: new Decimal(100),
        },
        13: {
            title: "Loopity loop",
            description: "+2 base super looplets gain",
            cost: new Decimal(300),
        },
        14: {
            title: "Loops faster",
            description: "x2 super looplets, ^1.2 OK points gain",
            cost: new Decimal(1000),
        },
        15: {
            title: "Recommended to loop 2 more times",
            description: "x4 super looplets gain",
            cost: new Decimal(50000),
        },
        16: {
            title: "Looping simulator",
            description: "x3 super looplets gain",
            cost: new Decimal(250000),
        },
        17: {
            title: "Self loop",
            description: "Gain more super looplets based on looplets",
            effect() {
                return player.i.points.add(1).times(0.000003)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(1000000),
        },
        18: {
            title: "No end",
            description: "x1.5 super looplets gain",
            cost: new Decimal(3000000),
        },
        19: {
            title: "Form a bigger loop",
            description: "x2 super looplets gain",
            cost: new Decimal(10000000),
        },
    layerShown(){return true}
    },
}
)
addLayer("k", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MLL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#F7F06D",
    requires: new Decimal(25000000), // Can be a function that takes requirement increases into account
    resource: "Mega Looplets", // Name of prestige currency
    baseResource: "Super Looplets", // Name of resource prestige is based on
    baseAmount() {return player.j.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.333333, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('k', 11)) mult = mult.add(0.2)
        if (hasUpgrade('k', 12)) mult = mult.add(0.6)
        if (hasUpgrade('k', 13)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('k', 15)) mult = mult.times(0.89)
        return mult
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    upgrades: {
        11: {
            title: "Mega Looplets!",
            description: "+0.2 base mega looplets gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "More mega looplets",
            description: "+0.6 base mega looplets gain.",
            cost: new Decimal(100),
        },
        13: {
            title: "Looping Maniac",
            description: "x5 Super looplets gain.",
            cost: new Decimal(1000),
        },
        14: {
            title: "Something is definitely off here",
            description: "x2 Mega looplets gain.",
            cost: new Decimal(10000),
        },
        15: {
            title: "WOW LOOPS",
            description: "^0.89 Mega looplets requirements",
            cost: new Decimal(100000),
        },
        16: {
            title: "End clicking",
            description: "Generate 100% of Super looplets per second, also x10 super looplets",
            cost: new Decimal(1000000),
        },
    layerShown(){return true}
    },
}
)
