var scale_factor = 0.4
var vue

function _translateY(y) {
  return windowHeight / 2 * (y * scale_factor + 1);
}

function _translateX(x) {
  return windowHeight / 2 * x  * scale_factor + windowWidth / 2;
}

function draw_spirograph() {
  
    if (typeof vue === "undefined")
        return

    strokeWeight(0.5)
    stroke(0, 0, 0)

    rect(0, 0, windowWidth, windowHeight)

    var last_x, last_y

    for (var i = 0; i < 2000; i++) {

        x = cos( radians(i * vue.step1 ) ) * vue.r1 - sin( radians(i * vue.step2 ) ) * vue.r2;
        y = sin( radians(i * vue.step1 ) ) * vue.r1 + cos( radians(i * vue.step2 ) ) * vue.r2;

        if (!last_x) last_x = x
        if (!last_y) last_y = y

        line(_translateX(x),_translateY(y), _translateX(last_x), _translateY(last_y))

        last_x = x;
        last_y = y;
    }

}

function setup() {
    createCanvas(windowWidth, windowHeight, SVG)
    draw_spirograph()
}

function windowResized() {
    //resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}

document.addEventListener("DOMContentLoaded", function(event) { 

  vue = new Vue({
      el: "#app",
      data: {
          r1: 1,
          r2: 0.3,
          step1: 5,
          step2: 5
      }, 
      watch: {
          r1: draw_spirograph,
          r2: draw_spirograph,
          step1: draw_spirograph,
          step2: draw_spirograph
      }, 
      methods: {
          save_svg: () => {
            save("wub_spiro.svg")
            alert("Je mooie svg is gebakken")
          }
      }
  })
})
