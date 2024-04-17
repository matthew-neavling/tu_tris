import { pointRing, isoscelesTriangle } from "./modules/draw.js";
import { Point } from "./modules/utils.js";
import { cherry, darkCherry } from "./modules/palettes.js";

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(4096, 2160);
    s.background(0);
    s.noLoop();
    s.angleMode("degrees");
  }

  s.draw = () => {
    s.stroke(0, 0);

    let center = new Point(s.width / 2, s.height / 2);


    // // Background triangles
    s.blendMode(s.BLEND)
    let inner_ring = pointRing(center, 70, 30, 1);
    let outer_ring = pointRing(center, 3000, 30, 1);

    inner_ring.forEach((p, i) => {
      let f = cherry.pickRandom();
      let a = new Point(p.x, p.y);
      let b = new Point(outer_ring[i].x, outer_ring[i].y);
      let [c, d, e] = isoscelesTriangle(a, b, Math.PI / 6);
      s.fill(f.r, f.g, f.b);
      s.triangle(
        c.perturb(150).x, c.perturb(150).y,
        d.x, d.y,
        e.x, e.y
      );
    })

    // Smaller Triangles
    s.blendMode(s.LIGHTEST)
    let small_inner_ring = pointRing(center, 900, 10).map(p => p.perturb(50));
    let small_outer_ring = pointRing(center, 1000, 10).map(p => p.perturb(100));

    small_inner_ring.forEach((p, i) => {
      let f = darkCherry.pickRandom();
      s.fill(f.r, f.g, f.b, s.random(95, 255));
      let q = s.shuffle(small_outer_ring).pop();
      let [a, b, c] = isoscelesTriangle(p, q, s.random(Math.PI / 2))
      s.triangle(a.x, a.y, b.x, b.y, c.x, c.y);

    })
  }
}

let myp5 = new p5(sketch, document.getElementById("canvas"));