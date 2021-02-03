const Entity = require("./entity/Entity");

class AI extends Entity {
    constructor() {
        super();
    }

    getName() {
        return "AI";
    }

    isAI() {
        return true;
    }

    startMessage() {
        console.log("AI’s turn...");
    }
}

module.exports = AI;