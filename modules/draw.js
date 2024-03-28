import { Point } from "./utils.js";

/**
 * 
 * @param {Point} a point of the tip of the triangle 
 * @param {Point} b midpoint of the base of the triangle
 * @param {number} angle angle of the tip of the triangle.
 * @returns {object} vertices of the triangle {a:Point, b:Point, c:Point}
 */
export function free_isosceles_triangle(a, b, angle) {
    let d = sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));

    let base = d * Math.tan(angle);
    let m = (a.y - b.y) / (a.x - b.x);
    let r = -1 / m;
    let c1 = new Point(
        base * (1 / Math.sqrt(1 + Math.pow(r, 2))) + b.x,
        base * (r / Math.sqrt(1 + Math.pow(r, 2))) + b.y
    );

    let c2 = new Point(
        -base * (1 / Math.sqrt(1 + Math.pow(r, 2))) + b.x,
        -base * (r / Math.sqrt(1 + Math.pow(r, 2))) + b.y
    );
    
    return {a:a, b:c1, c:c2}

}

/**
 * 
 * @param {Point} c center of the circle
 * @param {number} r radius of the circle
 * @param {number} n number of points to create.
 * @return {Point[]} returns array of points on the input circle's circumference. 
 */
export function point_ring(c, r, n) {
    let points = [];
    for (let i = 0; i < n; i++) {
        let p = new Point()
        p.x = r * Math.sin((360 / n) * i) + c.x;
        p.y = r * Math.cos((360 / n) * i) + c.y;

        points.push(p);
    }
    return points
}