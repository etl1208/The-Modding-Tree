let modInfo = {
	name: "The Hardest Tree",
	id: "mymod",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10^-308), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0 who cares no one is gona play it anyway",
	name: "Hardest tree",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Bumped end game to... END GAME DO NOT EXIST MAN DUMMY (Pls dont take dummy seriously, im joking as this game have a lack of humor and i am here to replenish the sence of humour.)`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0.00001)
	if (hasUpgrade('a', 11)) gain = gain.times(2)
    if (hasUpgrade('a', 12)) gain = gain.add(0.00002)
	if (hasUpgrade('a', 13)) gain = gain.times(1.1)
	if (hasUpgrade('a', 14)) gain = gain.times(3)
	if (hasUpgrade('a', 15)) gain = gain.times(3)
	if (hasUpgrade('a', 21)) gain = gain.times(10)
	if (hasUpgrade('a', 22)) gain = gain.times(1.2)
	if (hasUpgrade('a', 23)) gain = gain.times(1.5)
	if (hasUpgrade('a', 24)) gain = gain.times(1.8)
	if (hasUpgrade('a', 25)) gain = gain.add(0.02)
	if (hasUpgrade('a', 31)) gain = gain.add(0.05)
	if (hasUpgrade('a', 32)) gain = gain.times(2)
	if (hasUpgrade('a', 33)) gain = gain.times(5)
	if (hasUpgrade('a', 34)) gain = gain.times(1.08)
	if (hasUpgrade('a', 35)) gain = gain.times(1.05)
	if (hasUpgrade('a', 41)) gain = gain.times(1.04)
	if (hasUpgrade('a', 42)) gain = gain.times(1.035)
	if (hasUpgrade('a', 43)) gain = gain.times(1.03)
	if (hasUpgrade('a', 44)) gain = gain.times(1.02)
	if (hasUpgrade('a', 45)) gain = gain.times(1.01)
	if (hasUpgrade('a', 16)) gain = gain.times(1.1)
	if (hasUpgrade('a', 26)) gain = gain.times(1.1)
	if (hasUpgrade('a', 36)) gain = gain.times(1.1)
	if (hasUpgrade('a', 46)) gain = gain.times(1.1)
	if (hasUpgrade('b', 11)) gain = gain.times(2)
	if (hasUpgrade('b', 12)) gain = gain.add(1)
	if (hasUpgrade('b', 13)) gain = gain.add(2)
	if (hasUpgrade('b', 14)) gain = gain.add(3)
	if (hasUpgrade('b', 15)) gain = gain.add(5)
	if (hasUpgrade('b', 21)) gain = gain.times(2)
	if (hasUpgrade('b', 22)) gain = gain.times(1.25)
	if (hasUpgrade('b', 23)) gain = gain.times(1.5)
	if (hasUpgrade('b', 24)) gain = gain.times(1.5)
    if (hasUpgrade('b', 25)) gain = gain.times(1.5)
	if (hasUpgrade('a', 51)) gain = gain.times(10)
	if (hasUpgrade('a', 52)) gain = gain.times(1.2)
	if (hasUpgrade('b', 31)) gain = gain.times(3)
	if (hasUpgrade('b', 32)) gain = gain.times(3)
	if (hasUpgrade('b', 33)) gain = gain.times(3)
	if (hasUpgrade('b', 34)) gain = gain.times(5)
	if (hasUpgrade('b', 91)) gain = gain.times(25)
	if (hasUpgrade('c', 11)) gain = gain.times(2.5)
	if (hasUpgrade('c', 12)) gain = gain.times(1.5)
	if (hasUpgrade('c', 13)) gain = gain.times(3)
    if (hasUpgrade('c', 14)) gain = gain.times(4)
	if (hasUpgrade('c', 15)) gain = gain.times(5)
	if (hasUpgrade('c', 16)) gain = gain.times(6)
	if (hasUpgrade('c', 17)) gain = gain.times(7)
	if (hasUpgrade('c', 19)) gain = gain.times(8)
	if (hasUpgrade('c', 19)) gain = gain.times(9)
	if (hasUpgrade('c', 21)) gain = gain.times(upgradeEffect('c', 21))
	if (hasUpgrade('c', 22)) gain = gain.times(upgradeEffect('c', 22))
	if (hasUpgrade('c', 23)) gain = gain.times(upgradeEffect('c', 23))
	if (hasUpgrade('c', 24)) gain = gain.times(upgradeEffect('c', 24))
	if (hasUpgrade('c', 25)) gain = gain.times(upgradeEffect('c', 25))
	if (hasUpgrade('c', 26)) gain = gain.times(upgradeEffect('c', 26))
	if (hasUpgrade('c', 27)) gain = gain.times(upgradeEffect('c', 27))
	if (hasUpgrade('c', 28)) gain = gain.times(upgradeEffect('c', 28))
	if (hasUpgrade('c', 29)) gain = gain.times(upgradeEffect('c', 29))
	if (hasUpgrade('d', 11)) gain = gain.times(6.9)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("eeeee100"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}