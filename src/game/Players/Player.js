const Entity = require("./entity/Entity");

class Player extends Entity {
    constructor() {
        super();
    }

    getName() {
        return "You";
    }

    isAI() {
        return false;
    }

    startMessage() {
        console.log("Your turn:");
    }
}

module.exports = Player;