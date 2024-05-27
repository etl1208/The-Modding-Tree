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
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
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
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
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
        91: {
            title: "Remember this upgrade exist",
            description: "x25 point gain",
            cost: new Decimal(2500000),
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
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
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
            title: "Last upgrade",
            description: "OMG boost points",
            cost: new Decimal(1000000),
            effect() {
                return player[this.layer].points.add(1).pow(0.65)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
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
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
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
            description: "x6.9 point gain.",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(1).times(2).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    layerShown(){return true}
    },
}
)
