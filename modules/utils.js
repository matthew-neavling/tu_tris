export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Randomly translate point a maximum of n units in any direction
     * @param {*} n maximum distance point can be moved 
     */
    perturb(n=1){
        this.x += n*(Math.random() - (1/2));
        this.y += n*(Math.random() - (1/2));
        return this
    }

    /**
     * Translate the point x units horizontally and y units vertically
     * @param {number} x horizontal units
     * @param {number} y vertical units
     */
    translate(x, y){
        self.x += x
        self.y += y
        return this
    }

};

export class Palette {
    constructor(dict) {
        for (let key in dict) {
            let c = dict[key];
            this[key] = {r:c[0], g:c[1], b:c[2]};
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