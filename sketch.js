import { point_ring, free_isosceles_triangle } from "./modules/draw.js";
import { Point } from "./modules/utils.js";
import { cherry } from "./modules/palettes.js";

const s = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(1920, 1080);
    sketch.background(0);
    sketch.noLoop();
  }


  sketch.draw = () => {

    let center = new Point(sketch.width / 2, sketch.height / 2);

    let inner_ring = point_ring(center, 100, 100);

    sketch.fill(255);
    inner_ring.forEach((p) => {
      let f = cherry.pickRandom();
      sketch.fill(f.r, f.g. f.b);
      sketch.circle(p.x, p.y, 10)
    });

    sketch.text("center", sketch.width / 2, sketch.height / 2);


  }
}

let myp5 = new p5(s, document.getElementById("canvas"));