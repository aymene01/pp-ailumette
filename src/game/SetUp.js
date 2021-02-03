

class SetUp {
    constructor(columns, rows) {
        this.rows = rows;
        this.map = [];

        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if (!this.map[x]) {
                    this.map[x] = [];
                }

                let element = " "

                if (x === 0 || y === 0 || y === columns - 1 || x === rows - 1) {
                    element = "*";
                } else if (x===1 && y===4) element='|'
                else if (y===1 && x===3) element=' '
                else if (y===3 && x===2) element='|'
                else if (y===4 && x===2) element='|'
                else if (y===5 && x===2) element='|'
                else if (y===7 && x===3) element=' '
                else if (x===3 ) element='|' 
                else if (x===4 && 1<y<7 ) element='|' 

                this.map[x][y] = element;
            }
        }
    }

    display() {
        const rows = this.map.length;
        for (let x = 0; x < rows; x++) {
            console.log(this.map[x].join(''));
        }
    }

    remove(line, matches, entity) {
        let num = 0;
        for (let i in this.map[line]) {
            let value = this.map[line][i];
            if (value === "|") {
                this.map[line][i] = " ";
                num++;
            }
            if (num >= matches) {
                break;
            }
        }
        console.log(entity + " removed " + num + " match(es) from line " + line);
    }

    isEmpty() {
        for (let line of this.map) {
            if (line.includes("|")) {
                return false;
            }
        }
        return true;
    }

    getMatchOnLine(line) {
        let num = 0;
        for (let i of this.getMap()[line]) {
            if (i.includes("|")) {
                num++;
            }
        }
        return num;
    }

    getRows() {
        return this.rows - 2;
    }

    getMap() {
        return this.map;
    }

    getDifficulty() {
        return this.difficulty;
    }
}


module.exports = SetUp;

