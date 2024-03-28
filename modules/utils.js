export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

/**
 * 
 */
export class Palette {
    constructor(dict) {
        for (let key in dict) {
            let c = dict[key];
            this[key] = { r: c.r, g: c.g, b: c.b }
        }
    }

    pickRandom() {
        let result;
        let count = 0;
        for (let prop in this) {
            if (Math.random() < 1 / ++count) {
                result = prop
            }
        }
        return this[result]
    };

}