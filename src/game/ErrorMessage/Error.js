class ErrorMessages {
    constructor(tray) {
        this.rows = tray.getRows();
        this.tray = tray;
    }

    checkForLine(args) {
        let line = parseInt(args);
        if (isNaN(line) || args < 0) {
            console.log("Error: invalid input (positive number expected)");
            return false;
        }

        if (line > this.rows || line === 0) {
            console.log("Error: this line is out of range");
            return false;
        }

        return true;
    }

    checkForMatch(line, args) {
        let matches = parseInt(args);
        if (isNaN(matches) || args < 0 || args === null) {
            console.log("Error: invalid input (positive number expected)");
            return false;
        }

        if (matches === 0) {
            console.log("Error: you have to remove at least one match");
            return false;
        }

        if (matches > 2) {
            console.log("Error: you cannot remove two more matches");
            return false;
        }

        if (matches > this.tray.getMatchOnLine(line)) {
            console.log("Error: not enough matches on this line");
            return false;
        }

        return true;
    }
}

module.exports = ErrorMessages;