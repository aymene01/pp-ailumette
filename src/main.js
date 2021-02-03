const SetUp = require("./game/SetUp");
const Game = require("./game/Game");


const setUp = new SetUp(9, 6);
const game = new Game(setUp);
game.newRound();