const readline = require("readline");
const randomInt = require("../helpers/Random");

class Round {
    constructor(game, players) {
        this.game = game;
        this.players = players;
        this.messages = game.getMessages();
        this.tray = game.getTray();

        this.newPlay();
    }

    newPlay() {
        let entity = this.players[0];
        entity.startMessage();
        this.players.splice(0, 1);
        this.tray.display();

        if (entity.isAI()) {
            this.find(entity)
            this.check(entity);
        } else {
            this.line(entity.getName());
        }
    }

    find(entity) {
        let matches = 1;
        let line = 0;
        while (matches > this.tray.getMatchOnLine(line)) {
            line = randomInt(1, this.tray.getRows());
            matches = randomInt(1, 2);
        }
        this.tray.remove(line, matches, entity.getName());
    }

    line(entity) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Ligne: ", (line) => {
            if (!this.messages.checkForLine(line)) {
                rl.close();
                this.line(entity);
                return;
            }

            rl.close();
            this.matches(line, entity);
        });
    }

    matches(line, entity) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Matches: ", (matches) => {
            if (!this.messages.checkForMatch(line, matches)) {
                rl.close();
                this.line(entity);
                return;
            }

            this.tray.remove(line, matches, entity);
            rl.close();

            this.check(entity)

        });
    }

    check(entity) {
        if (this.tray.isEmpty()) {
            this.game.end(entity);
            return;
        }

        if (this.players.length !== 0) {
            this.newPlay();
            return;
        }

        this.game.newRound();
    }
}

module.exports = Round;