const Round = require("./Round");
const ErrorMessages = require("./ErrorMessage/Error");
const Player = require("./Players/Player");
const AI = require("./Players/AI");

class Game {
    constructor(tray) {
        this.number = 0;
        this.players = [new Player(), new AI()];
        this.messages = new ErrorMessages(tray);
        this.tray = tray;

        console.log("-----------------------------------------------")
        console.log(" Players: " + this.players.map(i => i.getName()).join(', '))
        console.log(" Good luck !")
        console.log("-----------------------------------------------")

    }

    newRound() {
        this.number++;
        new Round(this, [new Player(), new AI()]);
    }

    end(winners) {
        console.log("------------")
        console.log(winners.getName() + " lose");
        console.log("Game finish in " + this.number + " rounds");
        console.log("------------")
    }

    getMessages() {
        return this.messages;
    }

    getTray() {
        return this.tray;
    }
}

module.exports = Game;