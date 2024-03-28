import { point_ring, free_isosceles_triangle } from "./modules/draw.js";
import { Point } from "./modules/utils.js";
import { cherry, darkCherry } from "./modules/palettes.js";

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(1920, 1080);
    s.background(0);
    s.noLoop();
    s.angleMode("degrees");
  }

  s.draw = () => {
    s.stroke(0, 0);

    let center = new Point(s.width / 2, s.height / 2);


    // Background triangles
    let inner_ring = point_ring(center, 10, 30, 1);
    let outer_ring = point_ring(center, 1020, 30, 1);


    s.fill(255);


    inner_ring.forEach((p, i) => {
      let f = cherry.pickRandom();
      let a = new Point(p.x, p.y);
      let b = new Point(outer_ring[i].x, outer_ring[i].y);
      let [c, d, e] = free_isosceles_triangle(a, b, Math.PI / 6);
      s.fill(f.r, f.g, f.b);
      s.triangle(
        c.perturb(50).x, c.perturb(50).y,
        d.x, d.y,
        e.x, e.y
      );
    })

    // Smaller Triangles
    // s.blendMode(s.LIGHTEST)
    s.blendMode(s.LIGHTEST)

    let small_inner_ring = point_ring(center, 100, 10).map(p => p.perturb(50));
    let small_outer_ring = point_ring(center, 600, 10).map(p => p.perturb(100));

    small_inner_ring.forEach((p, i) => {
      let f = darkCherry.pickRandom();
      s.fill(f.r, f.g, f.b, s.random(95, 255));
      let q = s.shuffle(small_outer_ring).pop();
      let [a, b, c] = free_isosceles_triangle(p, q, s.random(Math.PI / 2))
      s.triangle(a.x, a.y, b.x, b.y, c.x, c.y);

    })


    // Small Scattered Triangles
    // s.blendMode(s.SOFT_LIGHT);

    // let scatter_inner_ring = point_ring(center, 20, 8).map(p=>p.perturb(200));
    // let scatter_outer_ring = point_ring(center, 230, 8).map(p=>p.perturb(200));

    // scatter_inner_ring.forEach((p, i) => {
    //   s.fill(0,100);
    //   // s.stroke(0);
    //   let q = scatter_outer_ring.pop();
    //   let [a,b,c] = free_isosceles_triangle(p, q, s.random(Math.PI / 2))
    //   s.triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    //   // s.blendMode(s.BLEND);
    //   // s.stroke(255);
    //   // s.strokeWeight(1);
    //   // s.triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    //   // s.blendMode(s.SOFT_LIGHT);
    // })
  }
}

let myp5 = new p5(sketch, document.getElementById("canvas"));