addLayer("a", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
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
    hotkeys: [
        {key: "A", description: "A: Reset for hell", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
    },
    layerShown(){return true}
}
)
addLayer("b", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
    hotkeys: [
        {key: "B", description: "A: Reset for hell", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
    },
    layerShown(){return true}
}
)